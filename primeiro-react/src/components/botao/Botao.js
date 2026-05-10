import styles from './botao.module.css'

function Botao({ conteudo , evento}) {
    return (
        <>
            <button onClick={evento} className={styles.btn} type="submit">{conteudo}</button>
        </>
    );
}
export default Botao