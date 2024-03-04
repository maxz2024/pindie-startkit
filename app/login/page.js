import { AuthForm } from "../components/AuthForm/AuthForm";
import { Overlay } from "../components/Overlay/Overlay";
import Styles from "./Login.module.css"
export default function Login() {
    return (
        <main className={Styles['main']}>
            <div class={Styles['main__auth']}>
                <AuthForm />
            </div>
        </main>


    )
}