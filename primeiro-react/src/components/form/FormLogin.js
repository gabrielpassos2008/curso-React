import Botao from "../botao/Botao"
import styles from "./formLogin.module.css"
function FormLogin() {
    return (
        <>
            <form>
                <h2>Faça seu login:</h2>
                <label>Email:</label>
                <input type="text" name="email"></input>

                <label>Senha:</label>
                <input type="text" name="senha"></input>

                <Botao conteudo="Logar"></Botao>
            </form>
        </>
    );
}

export default FormLogin