import Item from "./Item"
import styles from './List.module.css'

function List(){
    return(
        <>
        <h1 className={styles.titulo}>Minha lista</h1>
        <ul className={styles.lista}>
            <Item marca="gm" ano="2000" ></Item>
            <Item marca="bmw" ano="2010" ></Item>
            <Item marca="mercedes" ano="2021" ></Item>
        </ul>
        </>
    )
}

export default List