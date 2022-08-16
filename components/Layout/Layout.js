import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import Mainbar from "./Mainbar";
import Head from "next/head";
import styles from "./Layout.module.sass";

const Layout = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <div>
      <Head>
        <title>Inc Manager</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {ctx.isLoggedIn && <Mainbar />}
      <div className={styles["main-background"]}></div>
      <main className={styles.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
