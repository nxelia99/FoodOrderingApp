import React from 'react'
import AddProduct from './AddProduct'

function ProductPreviewCard({product, onAddProduct}) {
    
    const addProduct = () => {
        // create after selling up redux state cart to add product there
        onAddProduct(product)


    }

    return (
        <div className="w-full p-6 m-2 rounded text-white bg-slate-800 text-center h-5/6">
            <img src={product.imageUrl} alt={product.name} />
            <h2 className="pb-2 text-lg">{product.name}</h2>
            <p className="mb-2 h-24 line-clamp-4">{product.description}</p>
            <AddProduct onAddProduct={addProduct} />
        </div>
    )
  
}

export default ProductPreviewCard