import { JSX } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

function Navbar(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
      <img
              src="https://media.licdn.com/dms/image/v2/C560BAQHC_UfK23lLig/company-logo_200_200/company-logo_200_200/0/1630640870769?e=2147483647&v=beta&t=dqNjevwiG0yL3Ut3EFM1HxGhLF4iN6bXJOriF7f3hOE"
                className={styles.logo}
            />
      </div>
      <nav className={styles.nav}>
      <div className={styles.dropdown}>
          <Link href="#Home" className={styles.navLink}>HOME</Link>
        </div>
        <div className={styles.dropdown}>
          <Link href="#hellogit pull origin" className={styles.navLink}>GALLERY</Link>

        </div>
        <div className={styles.dropdown}>
          <Link href="#hehe" className={styles.navLink}>EVENT</Link>
         
        </div>
        <div className={styles.dropdown}>
          <Link href="#Sponsors" className={styles.navLink}>SPONSORS</Link>
        </div>
        <div className={styles.dropdown}>
          <Link href="#Merch" className={styles.navLink}>SWAGS</Link>
        </div>

        </nav>
    </header>
  );
}

export default Navbar;