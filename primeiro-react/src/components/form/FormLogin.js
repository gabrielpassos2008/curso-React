import Botao from "../botao/Botao"
import Input from "../input/Input";
import Condicional from "./Condicional";
import styles from "./formLogin.module.css"
import { useState } from "react";

function FormLogin() {

    const[nome , setNome] = useState()
    const[senha ,setSenha] = useState()

    function mostrar(evento){
        evento.preventDefault()
        console.log("feito")
    }
    return (
        <>
            <form onSubmit={mostrar} className={styles.form}>
                <h2 className={styles.h2}>Faça seu login:</h2>
                <label>Email:</label>
                <Input className={styles.input} tipo="text" nome="email" ></Input>

                <label>Senha:</label>
                <Input  tipo="text" nome="senha"></Input>
                <Botao  evento={mostrar} className={styles.input} conteudo="Logar"></Botao>
            </form>
        </>
    );
}

export default FormLogin