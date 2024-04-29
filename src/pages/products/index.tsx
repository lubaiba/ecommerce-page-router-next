"use client";
import React from "react";
import { ProductsService } from "../services/product-service";
import Addtocart from "@/components/addtocart/AddToCart";
import { useState, useEffect } from "react";

export default function ProductDetailCard(props: any) {
  const productId = props.productId;
  const [product, setProduct] = useState<any>(" ");
  useEffect(() => {
    const fetchProductDetail = async () => {
      const product = await ProductsService.getProductById(productId);
      console.log(product);
      setProduct(product);
    };
    fetchProductDetail();
  }, [productId]);

  return (
  
    <div>
      <div className="container pt-5 pb-5">
        <div
          className="col border d-flex flex-column flex-wrap border-secondary-subtle border-2 text-center bg-light"
          key={product.id}
        >
          <div className="d-flex flex-column pt-2">
            <label className="bg-success position-absolute text-white pe-2 ps-2">
              In Stock
            </label>
            <div className="d-flex justify-content-center">
              <img
                src={product.image?.url}
                alt="product"
                height={260}
                width={300}
              />
            </div>
          </div>
          <div className="product-card-body pt-2">
            <h4 className="text-decoration-none">{product.name}</h4>
            <p>{product.description}</p>
            <div>
              <span className="fw-bold">
                {product.price?.formatted_with_symbol}
              </span>
            </div>
            <div className="pb-2 d-flex gap-2 justify-content-center">
              <Addtocart productId={product.id} />
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}
