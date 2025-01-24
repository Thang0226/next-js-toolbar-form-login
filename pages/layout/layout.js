import Link from "next/link";
import styles from "./layout.module.css";

export default function Layout({children}) {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/" className={styles.link}>
                        Log out
                    </Link>
                </li>
                <li>
                    <Link href="/about" className={styles.link}>
                        About Us
                    </Link>
                </li>
                <li>
                    <Link href="/blog" className={styles.link}>
                        Blog
                    </Link>
                </li>
            </ul>
            <hr/>
            <div className={styles.container}>{children}</div>
        </div>
    );
}