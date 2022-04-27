import Logo from './../../public/image/Logo_CBZ.png';
import Image from 'next/image';
import styles from '/styles/creator-card.module.scss';

const CreatorCard = () => {
    return (
        <div className={`${styles.customCreatorCard} shadow-md p-5 rounded-md`}>
            <div className='hover:shadow-lg'>
                <Image
                    src={Logo}
                    alt='image logo'
                    width={200}
                    height={100}
                />
            </div>
            <div>
                <Image
                    src={Logo}
                    alt='image logo'
                    width={300}
                    height={150}
                />
            </div>
            <div className='hover:shadow-lg'>
                <Image
                    src={Logo}
                    alt='image logo'
                    width={200}
                    height={100}
                />
            </div>
        </div>
    )
}

export default CreatorCard;