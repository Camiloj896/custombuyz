import styles from '/styles/header-item.module.scss';
import Link from 'next/link';

const HeaderItem = ({ text, link }) => {
    return (
        <li className={`${styles.HeaderItemList} lg:ml-8 lg:my-0 my-7`}>
            <Link href={link}>
                <a>
                    <div className={styles.HeaderItem}>
                        <span className='own-font'>{ text }</span>
                        <span className='own-font'>{ text }</span>
                    </div>
                </a>
            </Link>
        </li>
    )
}

export default HeaderItem;