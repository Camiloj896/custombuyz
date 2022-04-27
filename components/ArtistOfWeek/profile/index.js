import Image from 'next/image';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

const ArtistProfile = ({ user }) => {
    return (
        <div className='artistProfile shadow-md hover:shadow-lg p-5 rounded-md divide-y divide-dashed cursor-pointer own-border-top'>
            <div className='artistDescription'>
                <div className='inline-block'>
                    <div className='flex justify-center'>
                        <Image
                            className='rounded-full border-black'
                            src={user.profileImg}
                            alt='artist profile'
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className='flex justify-center'>
                        <FaYoutube className='m-3' />
                        <FaInstagram className='m-3' />
                    </div>
                </div>
                <div className='inline-block'>
                    <h3 className='own-font'>{user.name} {user.lastName}</h3>
                    <span className='text-gray-300'>{user.city}</span>
                    <p>{user.description}</p>
                </div>
            </div>
            <div>
                <span className='text-neutral-900 font-bold flex justify-center own-font'>{user.word}</span>
            </div>
            <div>
                <p>{user.description2}</p>
            </div>
        </div>
    );
};

export default ArtistProfile;