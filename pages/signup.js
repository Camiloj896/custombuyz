import RegisterForm from "../components/RegisterForm";
import Logo from './../public/image/Logo_CBZ.png';
import Image from 'next/image'

const Signup = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
        <div className="flex justify-center flex-col items-center">
          <RegisterForm />
        </div>
        <div className="bg-login hidden lg:flex lg:items-center lg:justify-center">
          <div className="flex flex-col relative">
            <Image
              src={Logo}
              alt='image logo'
            />
            <span className='own-font own-font-border text-center text-7xl'>
              House of the artist
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
