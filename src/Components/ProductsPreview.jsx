import React, {useState, useEffect} from 'react';


function ProductsPreview() {

  const [products, setProducts] = useState([]);  
  useEffect(() =>{
    fetch("cluster0.anxbw3l.mongodb.net/food-ordering/products")
        .then(response => response.json())
        .then(data => setProducts(data?.data))
        .catch(e => console.log(e))
  }, [])  
  return (
    <div className='container mx-auto pb-4 w-2/3 text-white'><h2>Products</h2></div>
  )
}

export default ProductsPreview