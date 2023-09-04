
import React, { createContext, useState } from 'react';

export  const CartContext = createContext();

export  const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const [errorMessage, setErrorMessage]= useState(" ")

  const addToCart = (item) => {

   const toCheckItems = cartItems.find((checkItem)=> checkItem.id === item.id)
     if(toCheckItems){
      // alert("Item is in cart already")
      setErrorMessage("Item is in cart already ⚠😩")
      setTimeout(()=>{
        setErrorMessage(" ")
      }, 3000)
      return ;
     }


    return  setCartItems([...cartItems, item]);

     
    
  };

  const removeItem = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const updateQuantity = (item, d) => {
    let ind = -1;
  cartItems.forEach((data, index)=>{
    if (data.id === item.id)
      ind = index;
  });
  const tempArr = cartItems;
  tempArr[ind].amount += d;
  
  if (tempArr[ind].amount === 0)
    tempArr[ind].amount = 1;
    setCartItems([...tempArr]);
};

const handleChange = (item, d) =>{
 
}

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeItem, updateQuantity, errorMessage }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartContext;

