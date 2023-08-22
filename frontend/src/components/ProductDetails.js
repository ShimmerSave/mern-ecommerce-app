const ProductDetails = ({ product }) => {
  
  return (
    <div className='product-details'>
      <img src={product.image} alt='product pic'/>
      <h4>{product.slug}</h4>
      <h4>${product.price}</h4>
    </div>
  );
};

export default ProductDetails;