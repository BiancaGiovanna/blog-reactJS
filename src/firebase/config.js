import { getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAkZYCkIhqkKrye-zBWXPlHT-fr7Qlc8gk",
  authDomain: "blog-react-c12b8.firebaseapp.com",
  projectId: "blog-react-c12b8",
  storageBucket: "blog-react-c12b8.appspot.com",
  messagingSenderId: "986848788930",
  appId: "1:986848788930:web:78f7b8b56e9b128e55965b",
  measurementId: "G-C4EF7L2JYG",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
