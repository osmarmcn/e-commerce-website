import React, {createContext, useState, useEffect} from 'react';
import { json } from 'react-router-dom';


export const ProductContext = createContext()





const ProductProvider = ({children}) => {
  //products state
  const [products, setProducts] = useState([])

  //fetch products
  const fetchProducts = async () =>{
    const response = await fetch('https://fakestoreapi.com/products')
    //.then(res => res.json())
    //.then(json => console.log(json))

    const data = await response.json()
    console.log(data)
  }


  return <ProductContext.Provider>{children}</ProductContext.Provider>
};

export default ProductProvider;
