import { useContext } from 'react';
import { GlobalContext } from './../context/GlobalContext';

import Product from './../components/Product/index';
import ProductsFeatured from './../components/ProductsFeatured/index';
import Header from './../components/Header/index';
import Footer from './../components/Footer/index';

const Home = () => {

  const { shoppingCartState, userState } = useContext(GlobalContext);

  console.log({shoppingCartState});
  console.log({userState});

  return (
    <>
      <Header />
      <div className="container lg:mt-40 md:mt-20 mb-20 ">
        <div className='grid grid-cols-1 mx-5 mt-10 gap-y-10 md:grid-cols-2 md:gap-4 md:pt-5 md:mt-5 lg:grid-cols-4'>
          <Product style2={'1'}/>
          <Product style2={'1'}/>
          <Product style2={'1'}/>
          <Product style2={'1'}/>
        </div>
        <div className='grid grid-cols-1 mx-5 mt-10'>
          <span className='own-font own-font-border text-center text-7xl mt-10 mb-10'>Sneakers of the week</span>
          <ProductsFeatured>
            <Product style2={'1'}/>
            <Product style2={'1'}/>
            <Product style2={'1'}/>
            <Product style2={'1'}/>
            <Product style2={'1'}/>
            <Product style2={'1'}/>
            <Product style2={'1'}/>
            <Product style2={'1'}/>
          </ProductsFeatured>
        </div>
        <div className='grid grid-cols-1 mx-5 mt-10'>
          <span className='own-font own-font-border text-center text-7xl mt-10 mb-10'>CustomBuyz Shop</span>
        </div>
        <div className='grid grid-cols-1 mx-5 mt-10 gap-y-10 md:grid-cols-4 md:gap-4 md:pt-5 md:mt-5'>          
          <Product style2={'1'}/>
          <Product style2={'1'}/>
          <Product style2={'1'}/>
          <Product style2={'1'}/>
        </div>
        <div className='grid grid-cols-1 mx-5 mt-10 gap-y-10 md:grid-cols-4 md:gap-4 md:pt-5 md:mt-5'>
          <Product style2={'1'}/>
          <Product style2={'1'}/>
          <Product style2={'1'}/>
          <Product style2={'1'}/>        
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home;
