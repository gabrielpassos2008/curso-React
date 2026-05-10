import FormLogin from "../form/FormLogin";
import styles from "./conteinerLogin.module.css"

function ConteinerLogin() {
    return (
        <div className={styles.conteiner}>
            <FormLogin></FormLogin>
        </div>
    );
}

export default ConteinerLogin