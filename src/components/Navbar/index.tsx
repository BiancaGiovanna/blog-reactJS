import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";

export default function Navbar() {
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
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Sobre
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
