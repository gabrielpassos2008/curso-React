import { useState } from "react"

function Condicional(){
    
    const [email, setEmail] = useState()

    function enviarEmail(evento){
        evento.preventDefault()
        console.log('testando')
    }
    
    return(
        <>
            <h1>cadestre seu e-mail:</h1>
            <form>
                <label>e-mail</label>
                <input type="email" placeholder="digite seu e-mail"  onChange={(evento)=> setEmail(evento.target.value)}></input>
                <button type="submit" onClick={enviarEmail }>Enviar email</button>
            </form>

        </>
    )
}

export default Condicional