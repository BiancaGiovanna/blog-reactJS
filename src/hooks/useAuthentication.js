// import { db } from "../firebase/config";
import { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  // signInWithEmailAndPassword,
  updateProfile,
  // signOut,
} from "firebase/auth";

export const useAuthentication = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [cancelled, setCancelled] = useState(false);
  const auth = getAuth();

  const checkIfIsCanceled = () => {
    if (cancelled) {
      return;
    }
  };

  const createUser = async (data) => {
    checkIfIsCanceled();

    setLoading(true);
    setError("");

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, {
        displayName: data.displayName,
      });
      setLoading(false);

      return user;
    } catch (error) {
      let systemErrorMessage = "";

      if (error instanceof Error && error.message.includes("Password")) {
        systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres";
      } else if (
        error instanceof Error &&
        error.message.includes("email-already")
      ) {
        systemErrorMessage = "E-mail já cadastrado";
      } else {
        systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde";
      }

      setLoading(false);
      setError(systemErrorMessage);
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    loading,
  };
};
