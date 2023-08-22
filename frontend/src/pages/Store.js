import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// components
import ProductDetails from '../components/ProductDetails';

const Store = () => {
  const params = useParams();
  const {category} = params;
  const [products, setProducts] = useState(null);
  
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products');
      const json = await response.json();

      if (response.ok) {
        setProducts(json);
      };
    };

    fetchProducts();
  }, []);

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