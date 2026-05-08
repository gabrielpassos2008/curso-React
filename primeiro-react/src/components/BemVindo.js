import styles from './BemVindo.module.css'

function BemVindo(props){
    return(
        <div className={styles.titulo}>
            <h1  > seja bem vindo, {props.nome}</h1>
        </div>
    )
}

export default BemVindo