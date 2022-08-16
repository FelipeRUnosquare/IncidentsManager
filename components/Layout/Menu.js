import Link from "next/link";
import styles from "./Layout.module.sass";

const Menu = ({ items }) => {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <Link key={item.id} href={item.href}>
          <a className={styles.card}>
            <h2>{item.title}</h2>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
