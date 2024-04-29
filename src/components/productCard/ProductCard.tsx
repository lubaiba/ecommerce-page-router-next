import Link from 'next/link'
import React from 'react'
import { ProductsService } from '../services/product-service';
import { ProductsDataType } from '@/pages/services/classes';
import { useState } from 'react';
import { Route } from 'next';
const ProductCard = (props:any) => {  

    const product: ProductsDataType = props.products;
    const [cart,setAddCart]=useState({});
    const addToCartItem=async(productId:any)=>{
     var cartdata=await ProductsService.addToCart(productId);
     setAddCart(cartdata.line_items);
    } 
   
  return (
     <> 

          <div  className="col-md-3 mb-4 ms-4 col-12 border d-flex flex-wrap border-secondary-subtle border-2 text-center bg-light"> 
              <div className="d-flex flex-column pt-2">
                <label className="bg-success position-absolute text-white pe-2 ps-2">
                  In Stock
                </label>
                <img
                  src={product.image?.url}
                  alt="product"
                  height={260}
                  width={200}
                />
              </div>
              <div className="pt-2">
              <Link href={('/products/' + product.id) as Route }><h4 className="text-decoration-none">{product.name}</h4></Link>
                <p>{product.description}</p>
                <div>
                  <span className="fw-bold">
                    {product.price.formatted_with_symbol}
                  </span>
                </div>
                <div className="pb-2 d-flex gap-2 justify-content-center">
                  <Link href={'/cart'} >
                    <button onClick={()=>addToCartItem(product.id)} className="btn btn-success">Add To Cart</button>
                  </Link>
                  <Link href={('/products/' + product.id) as Route} className="btn btn-success">
                    {" "}
                    View{" "}
                  </Link>
                </div>
              </div>
            </div>
      
            </>
  )
  }

export default ProductCard
