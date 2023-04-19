import React from 'react'

function ProductPreviewCard({product}) {

    return (
        <div className="w-full p-4 m-2 rounded text-white bg-slate-800 text-center">
            <img src={product.imageUrl} alt={product.name} />
            <h2 className="pb-2 text-lg">{product.name}</h2>
            <p className="mb-2 h-20 line-clamp-4">{product.desciption}</p>
             
        </div>
    )
  
}

export default ProductPreviewCard