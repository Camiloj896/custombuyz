import { useContext } from 'react';
import { GlobalContext } from './../context/GlobalContext';

import Product from './../components/Product/index';
import ProductsFeatured from './../components/ProductsFeatured/index';
import CreatorCard from './../components/CreatorCard/index';
import Layout from '../components/Layout/index';
import SectionTitle from '../components/SectionTitle/index';
import ArtistOfWeek from '../components/ArtistOfWeek/index';

const Home = () => {

  const { shoppingCartState, userState } = useContext(GlobalContext);

  return (
    <Layout title="Home" description="Home Page">
      <div className="container lg:mt-40 md:mt-20 mb-20 ">
        <CreatorCard />

        <SectionTitle title='Artist of the week' />
        <ArtistOfWeek />

        <SectionTitle title='Sneakers of the week' />
        <div className='grid grid-cols-1 mt-10 gap-y-10 md:grid-cols-2 md:gap-4 md:pt-5 md:mt-5 lg:grid-cols-4'>
          <Product style2={'1'}/>
          <Product style2={'1'}/>
          <Product style2={'1'}/>
          <Product style2={'1'}/>
        </div>
        {/* <div className='grid grid-cols-1 mt-10'>
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
        </div> */}

        <SectionTitle title='CustomBuyz Shop' />

        <div className='grid grid-cols-1 mt-10 gap-y-10 md:grid-cols-4 md:gap-4 md:pt-5 md:mt-5'>          
          <Product style2={'1'}/>
          <Product style2={'1'}/>
          <Product style2={'1'}/>
          <Product style2={'1'}/>
        </div>
        <div className='grid grid-cols-1 mt-10 gap-y-10 md:grid-cols-4 md:gap-4 md:pt-5 md:mt-5'>
          <Product style2={'1'}/>
          <Product style2={'1'}/>
          <Product style2={'1'}/>
          <Product style2={'1'}/>        
        </div>
      </div>
    </Layout>
  )
}

export default Home;
