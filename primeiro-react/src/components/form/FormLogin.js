import Botao from "../botao/Botao"
import Input from "../input/Input";
import styles from "./formLogin.module.css"
function FormLogin() {
    return (
        <>
            <form>
                <h2>Faça seu login:</h2>
                <label>Email:</label>
                <Input tipo="text" nome="email"></Input>

                <label>Senha:</label>
                <Input tipo="text" nome="senha"></Input>
                <Botao conteudo="Logar"></Botao>
            </form>
        </>
    );
}

export default FormLogin