import React, {createContext, useState, useEffect} from 'react';
import { json } from 'react-router-dom';


export const ProductContext = createContext()





const ProductProvider = ({children}) => {
  //products state
  const [products, setProducts] = useState([])


 useEffect(()=>{
    //fetch products
    const fetchProducts = async () =>{
        const response = await fetch('https://fakestoreapi.com/products')
        //.then(res => res.json())
        //.then(json => console.log(json))

        const data = await response.json()
        //console.log(data)
        setProducts(data)
    }

    fetchProducts()
 }, []) 
  


  return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>
};

export default ProductProvider;
