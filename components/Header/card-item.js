import { FaShoppingCart } from 'react-icons/fa'
import styles from '/styles/header-item.module.scss';

const HeaderCardItem = () => {
    return (
        <li className={`${styles.HeaderItemList} lg:ml-8 lg:my-0 my-7`}>
            <div className={styles.HeaderItemCard}>
                <span><FaShoppingCart /></span>
                <span><FaShoppingCart /></span>
            </div>
        </li>
    )
}

export default HeaderCardItem;