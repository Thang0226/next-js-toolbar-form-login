import styles from '../styles/login.module.css'
import Layout from "./layout/layout";
import { useRouter } from 'next/navigation'

export default function LoginPage() {
    const router = useRouter()
    return (
        <Layout>
            <div className={styles.wrapper}>
                <div className={styles.formContent}>
                    <h2>Login</h2>
                    <form>
                        <input className={styles.input} type="text" id="login" name="login" placeholder="login"/>
                        <input className={styles.input} type="text" id="password" name="login" placeholder="password"/>
                        <button type="button" className={styles.button} onClick={() => router.push('/home')}>Log In</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}