import propTypes from "prop-types"
import styles from './Item.module.css'
function Item({marca, ano}){
    return(
        <>
            <li className={styles.item}>
                {marca} - {ano}
            </li>
        </>
    )

Item.prototype= {
    marca: propTypes.string.isRequired,
    ano: propTypes.number.isRequired
}
}
export default Item