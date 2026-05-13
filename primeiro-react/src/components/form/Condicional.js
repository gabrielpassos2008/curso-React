import { useState } from "react"

function Condicional(){
    
    function enviarEmail(evento){
        evento.preventDefault()
        console.log('testando')
    }
    
    return(
        <>
            <h1>cadestre seu e-mail:</h1>
            <form>
                <label>e-mail</label>
                <input type="email" placeholder="digite seu e-mail"></input>
                <button type="submit" onClick={enviarEmail }>Enviar email</button>
            </form>

        </>
    )
}

export default Condicional