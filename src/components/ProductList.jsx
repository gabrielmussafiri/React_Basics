import React from 'react'

const ProductList = () => {
    const products =[
        {id:1 , name:"Phone",price:"$699"},
        {id:2 , name:"Laptop",price:"$1200"},
        {id:3 , name:"Headphones",price:"$199"}
    ]
  return (
    <div>
        <h1>Product Rendering with Map()</h1>
        {
            products.map((product)=>(
                <div key={product.id}>
                    <div>{product.name}</div>
                    <div>{product.price}</div>
                </div>
            ))
        }
      
    </div>
  )
}

export default ProductList
