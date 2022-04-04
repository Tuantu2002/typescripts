/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../client_api/product";
import { PRODUCT_TYPE } from "./ProductList";
function ProductsDetail (){
   const {id} =  useParams();

   const [product, setProduct] = useState<PRODUCT_TYPE>();
   const  handleGetProductDetail = async () =>{
       const respone = await getProduct(id);
       setProduct(respone.data);
     
   }
   useEffect(() => {
       handleGetProductDetail();
   },[]);
    return(
        <div>
            <h1>ProductDetail</h1>
            <p>id : {product?.id}</p>   
 
        </div>
    );
    
    }
    
    export default ProductsDetail;