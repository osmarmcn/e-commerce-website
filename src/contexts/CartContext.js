import React, {useContext,useState, useEffect, createContext, Children} from 'react';

export const CartContext = createContext()

const CartProvider = ({children}) => {

const [cart,setCart] = useState([])

const [itemAmount, setItemAmount] = useState(0)



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
//console.log(cart)

const removeFromCart = (id) =>{
  const newCart = cart.filter((item) =>{
    return item.id !== id
  })
  setCart(newCart)
}

const clearCart = () =>{
  setCart([])
}

const increaseAmount = (id) =>{
 //console.log('amount increased')

 const cartItem = cart.find((item) =>item.id === id)
 //console.log(item)
 addToCart(cartItem, id)

}

const decreaseAmount = (id) =>{
  const cartItem= cart.find((item) =>{
    return item.id === id
  })

  if(cartItem){
    const newCart = cart.map((item) =>{
      if(item.id === id){
        return {...item, amount:cartItem.amount -1}

      }else{
        return item

      }
    })
    setCart(newCart)

  }

  if(cartItem.amount < 2){
      removeFromCart(id)
    }
  
  
}

  return  <CartContext.Provider value={{cart,addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount, itemAmount}}>
    {children}
  </CartContext.Provider>
}

export default CartProvider;
