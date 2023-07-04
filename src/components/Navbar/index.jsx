import { NavLink } from "react-router-dom";

import { useAuthentication } from "../../hooks/useAuthentication";

import { useAuthValue } from "../../context/AuthContext";

import styles from "./Navbar.module.css";

export default function Navbar() {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();
  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.brand} to={"/"}>
        React <span>Blog</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        {!user ? (
          <>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Cadastrar-se
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink
                to="/posts/create"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Novo Post
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Dashboard
              </NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Sobre
          </NavLink>
        </li>
        {user ? (
          <li>
            <button onClick={logout}>Sair</button>
          </li>
        ) : (
          ""
        )}
      </ul>
    </nav>
  );
}
