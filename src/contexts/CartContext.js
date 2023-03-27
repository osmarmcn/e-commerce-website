import React, {useContext,useState, useEffect, createContext, Children} from 'react';

export const CartContext = createContext()

const CartProvider = ({children}) => {

const [cart,setCart] = useState([])

const addToCart = (product, id) =>{

  const newItem = {...product, amount:1}
  console.log(newItem)
  //console.log(`item ${product.title} added to the cart`)

  const CartItem = cart.find((item) =>{
    return item.id === id
  })
  //console.log(CartItem)


  //if cart is already  in the cart
  if(CartItem){
    const newCart = [...cart].map((item)=> {
      if(item.id === id){
        return {...item,amount: CartItem.amount +1}

      }else{
        return item
      }
    })
    setCart(newCart)

  }else{
    setCart([...cart,newItem])
  }
}
console.log(cart)


  return  <CartContext.Provider value={{cart,addToCart}}>
    {children}
  </CartContext.Provider>
}

export default CartProvider;
