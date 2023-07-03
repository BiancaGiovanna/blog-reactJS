import styles from "./Register.module.css";

import { useState, useEffect, FormEvent } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";

export default function Register() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, seterror] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    seterror("");

    const user = {
      displayName,
      email,
      password,
    };

    if (password !== confirmPassword) {
      seterror("As senhas precisam ser iguais");
      return;
    }
    const res = await createUser(user);

    console.log("res", res);
  };

  useEffect(() => {
    const convertError = authError.toString();
    if (convertError) {
      seterror(convertError);
    }
  }, [authError]);

  return (
    <div className={styles.register}>
      <h1>Cadastre-se</h1>
      <p>Crie seu usuário</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome do usuário."
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail do usuário."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira sua senha."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <span>Confirme sua senha:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme sua senha."
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        {!loading && <button className="btn">Cadastrar</button>}
        {loading && (
          <button className="btn" disabled>
            Auguarde...
          </button>
        )}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}
