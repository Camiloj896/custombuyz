import Product from './../../Product/index';
import ProductsFeatured from './../../ProductsFeatured/index';

const ArtistProduct = ({ products }) => {

    return (
        <div>
            <ProductsFeatured
                IlargeDesktop={1}
                Idesktop={1}
                Itablet={1}
                Imobile={1}
            >
                {products?.map(
                    (product) => <Product style2={'1'} key={product.id} /> 
                )}
            </ProductsFeatured>            
        </div>
    );
};

export default ArtistProduct;