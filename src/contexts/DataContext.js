import React, { createContext, useEffect, useState } from "react";

const DataContext = React.createContext(null);

export const DataContextProvider = ({ children }) => {

  const cartDietsInitialValue = JSON.parse(localStorage.getItem("cartItems")) || [];
  const likedDietsInitialValue = JSON.parse(localStorage.getItem("likedDiets")) || [];

  let [cartDiets, setCartDiets] = useState(cartDietsInitialValue);
  let [likedDiets, setLikedDiets] = useState(likedDietsInitialValue);

  // const handleTotalAmount = (amount) => {
  //   if (totalAmount !== 0) {
  //     setTotalAmount([totalAmount.reduce((acc, curr) => acc + amount, 0)]);
  //   }
  // };


  const handleRemoveFromCart = (id) => {
    const newCartDiets = cartDiets.filter((item) => {
      return item !== id;
    }
    );
    setCartDiets(newCartDiets);
  };


  const handleRemoveFromWishlist = (id) => {
    const newLikedDiets = likedDiets.filter((item) => {
      return item !== id;
    }
    );
    setLikedDiets(newLikedDiets);
  };

  useEffect(() => {
    // save items to local storage when the cartDiets state changes
    localStorage.setItem('cartItems', JSON.stringify(cartDiets));
  }, [cartDiets]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cartDiets'));
    if (cartItems) {
      setCartDiets(cartItems);
    }
  }, []);



  useEffect(() => {
    // save liked items to local storage when the liked Diets state changes
    localStorage.setItem('likedDiets', JSON.stringify(likedDiets));
  }, [likedDiets]);

  useEffect(() => {
    const likedDiets = JSON.parse(localStorage.getItem('likedDiets'));
    if (likedDiets) {
      setLikedDiets(likedDiets);
    }
  }, []);

  const values = {

    cartDiets, setCartDiets,
    likedDiets, setLikedDiets,
    handleRemoveFromCart,
    handleRemoveFromWishlist,
    // handleTotalAmount,
    //  totalAmount,setTotalAmount
  };

  return <DataContext.Provider handleRemoveFromWishlistr value={values}>
    {children}
  </DataContext.Provider>;
};

export default DataContext;