import ArtistProfile from './profile/index';
import ArtistProduct from './product/index';
import { useContext } from 'react';
import { GlobalContext } from './../../context/GlobalContext';
import styles from '/styles/artist-of-week.module.scss';

const ArtistOfWeek = () => {

    const { artistOfWeek } = useContext(GlobalContext);

    const { data } = artistOfWeek;

    return (
        <div className={styles.ArtistOfWeek}>
            <div>
                <ArtistProfile user={data} />
            </div>
            <div>
                <ArtistProduct products={data.products} />
            </div>
        </div>
    );
};

export default ArtistOfWeek;
