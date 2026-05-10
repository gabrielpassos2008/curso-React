import {useState} from "react"

function FromTest(){
    const [nome, setNome] = useState()
    const [senha, setSenha] = useState()

    function cadastrarUsuario(evento){
        evento.preventDefault()
        console.log(senha)
        console.log(nome)
    }

    return(
        <form onSubmit={cadastrarUsuario}>
            <h1>login</h1>

            <label>email:</label>
            <input type="text" name="email" onChange={(evento) => setNome(evento.target.value)}></input>

            <label>senha:</label>
            <input type="text" name="senha" onChange={(evento) => setSenha(evento.target.value)}></input>               

            <button>logar</button>
        </form>
    );
}

export default FromTest