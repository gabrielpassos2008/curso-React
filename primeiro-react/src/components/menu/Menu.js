import BotaoMenu from "../botao/BotaoMenu";
import syles from "./menu.module.css"

function Menu(){
    return(
       <div className={syles.nav}>
            <BotaoMenu conteudo="Dashboard" ></BotaoMenu>
            <BotaoMenu conteudo="Histórico"></BotaoMenu>
            <BotaoMenu conteudo="Perfil"></BotaoMenu>
       </div>
    );

}

export default Menu