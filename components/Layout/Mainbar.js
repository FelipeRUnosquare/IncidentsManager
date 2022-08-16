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
      {/* <SearchBar /> */}
      <div
        className={buttonStyle}
        onClick={() => router.push("/incidents/null")}
      >
        Add
      </div>
      <div className={buttonStyle} onClick={handleLogout}>
        logout
      </div>
    </nav>
  );
};

export default Mainbar;
