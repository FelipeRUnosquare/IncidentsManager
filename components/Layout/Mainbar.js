import { useRouter } from "next/router";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import DataContext from "../../store/data-context";
import styles from "./Layout.module.sass";
import SearchBar from "./SearchBar";

const Mainbar = () => {
  const router = useRouter();
  const ctx = useContext(AuthContext);
  const handleLogout = () => {
    ctx.onLogout();
  };

  const handleClickGoHome = () => {
    router.push("/home");
  };
  const buttonStyle = `material-symbols-outlined ${styles["button-logout"]}`;

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.title} onClick={handleClickGoHome}>
        Inc Manager
      </h1>
      <div className={styles.deskButton}>
        <button onClick={() => router.push("/incidents/null")}>
          Add Incident
        </button>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className={styles.mobileButtons}>
        <button onClick={() => router.push("/incidents/null")}>
          <i className="fa fa-plus"></i>
        </button>
        <button onClick={handleLogout}>
          <i className="fa fa-sign-out"></i>
        </button>
      </div>
    </nav>
  );
};

export default Mainbar;
