'use client'
import React from 'react'
import { useRouter } from 'next/router';
import ProductDetailCard from '.';

export default function ProductDetail(props:any) {
  const router = useRouter();
  const productId = router.query.productId; 
  console.log("product " + productId);
  return (
    <div>
      <ProductDetailCard productId={productId}/>
    </div>
  )
}
