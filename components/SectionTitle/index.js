import styles from '/styles/section-title.module.scss';

const SectionTitle = ({ title }) => {
    return (
        <div className={styles.SectionTitle}>
          <div>
            <span className='own-font'>{ title }</span>
            <span className='own-font'>{ title }</span>
          </div>
          <div />
        </div>
    )
}

export default SectionTitle;