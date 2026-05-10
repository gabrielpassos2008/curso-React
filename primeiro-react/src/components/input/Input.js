import styles from "./input.module.css"

function Input({tipo,nome}){
    return(
        <>
            <input type={tipo} name={nome}></input>
        </>
    );
}
export default Input