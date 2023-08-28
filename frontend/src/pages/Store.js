import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductsContext } from '../hooks/useProductsContext';

// components
import ProductDetails from '../components/ProductDetails';

const Store = () => {
  const {products, dispatch} = useProductsContext();
  const params = useParams();
  const {category} = params;
  
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products');
      const json = await response.json();

      if (response.ok) {
        dispatch({type: 'SET_PRODUCTS', payload: json});
      };
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <div className='store'>
      <div className='products'>
        {products && products.filter((product) => {
          return product.category === category;
          }).map((product) => (
          <ProductDetails key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Store;