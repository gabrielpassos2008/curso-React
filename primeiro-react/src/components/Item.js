import PropTypes from "prop-types"
import styles from './Item.module.css'

function Item({ marca, ano }) {
    return (
        <li className={styles.item}>
            {marca} - {ano}
        </li>
    )
}

Item.propTypes = {
    marca: PropTypes.string,
    ano: PropTypes.number
}

Item.defaultProps = {
    marca: "faltou a marca",
    ano: 0
}

export default Item