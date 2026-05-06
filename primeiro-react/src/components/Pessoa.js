import BemVindo from "./BemVindo";
function Pessoa({nome,idade, peso}){
    return(
        <div>
            <BemVindo nome={nome}></BemVindo>
            <p>Idade: {idade}</p>
            <p>Peso: {peso}</p>
        </div>
    );
}

export default Pessoa