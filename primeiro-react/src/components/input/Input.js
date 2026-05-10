import styles from "./input.module.css"

function Input({tipo,nome}){
    return(
        <>
            <input className={styles.campo} type={tipo} name={nome}></input>
        </>
    );
}
export default Input