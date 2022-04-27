import Layout from '../components/Layout/index';
import LoginForm from './../components/LoginForm/index';
import { FaArrowLeft } from "react-icons/fa";
import Link from 'next/link';
import Logo from './../public/image/Logo_CBZ.png';
import Image from 'next/image'

const Login = () => {
  return (
    <Layout
      title="Login"
      description="Login Page"
      header={false}
      footer={false}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
          <div className="flex justify-center flex-col items-center py-10">
            <Link href='/'>
                <a className='back-to-home hover:text-gray-400 duration-200'><FaArrowLeft /></a>
            </Link>
            <LoginForm className="h-full w-full p-1" />
          </div>
        <div className="bg-login hidden lg:flex lg:items-center lg:justify-center">
          <div className="flex flex-col relative">
            <Image
              src={Logo}
              alt='image logo'
            />
            <span className='own-font own-font-border text-7xl text-center'>
              House of the artist
            </span>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Login;