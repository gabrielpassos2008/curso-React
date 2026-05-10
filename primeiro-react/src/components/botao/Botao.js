import styles from './botao.module.css'

function Botao({ conteudo }) {
    return (
        <>
            <button className={styles.btn} type="submit">{conteudo}</button>
        </>
    );
}
export default Botao