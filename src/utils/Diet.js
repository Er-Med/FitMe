import React, { useContext, useEffect, useState } from "react";
import '../assets/css/Diet_style.css';
import { Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import DataContext from "../contexts/DataContext";
import { FaHeart } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';

function Diet({ image, title, price1, price2, price3, description, id }) {

  const [isShowBtn, setIsShowBtn] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isAddToCart, setIsAddToCart] = useState(false);

  const {
    setIsLogInRequest,
    user,
    registerEmail
  } = useContext(AuthContext);

  const {
    cartDiets, setCartDiets,
    likedDiets, setLikedDiets,
  } = useContext(DataContext);

  useEffect(() => {
    if (user === null) {
      setIsAddToCart(false);
      setIsLiked(false);
    }
  }, [registerEmail]);


  const handledisplay = () => {
    return (window.location.pathname === '/') ? 'none' : 'price';
  };

  const isIdExistOnCartDiets = cartDiets.includes(id);
  const isIdExistOnLikedDiets = likedDiets.includes(id);

  //add cart Item Id To cartDiets
  const addItemIdToCartItems = () => {
    if (!isIdExistOnCartDiets) {
      setCartDiets([...cartDiets, id]);
    }
  };

  // remove cart Item Id From CartItems
  const removeItemIdFromCartItems = () => {
    let narr = cartDiets.filter((item) => { return item !== id; });
    setCartDiets(narr);
  };

  // save cart Items when component mount 
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (cartItems) {
      if (cartItems.includes(id)) {
        setIsAddToCart(true);
      }
    }
  }, []);

  //add Item Id To LikedItems
  const addItemIdToLikedItems = () => {
    if (!isIdExistOnLikedDiets) {
      setLikedDiets([...likedDiets, id]);
    }
  };

  // remove Item Id From LikedItems
  const removeItemIdFromLikedItems = () => {
    let narr = likedDiets.filter((item) => { return item !== id; });
    setLikedDiets(narr);
  };

  useEffect(() => {
    // save liked Items when component mount 
    const LikedItems = JSON.parse(localStorage.getItem('likedDiets'));
    if (LikedItems) {
      if (LikedItems.includes(id)) {
        setIsLiked(true);
      }
    }
  }, []);

  const handleCartDietClick = () => {
    if (isAddToCart) {
      removeItemIdFromCartItems();
      setIsAddToCart(false);

    } else {
      addItemIdToCartItems();
      setIsAddToCart(true);
    }
  };


  const handleLikedDietClick = () => {
    if (isLiked) {
      removeItemIdFromLikedItems();
      setIsLiked(false);

    } else {
      addItemIdToLikedItems();
      setIsLiked(true);
    }
  };



  return (
    <div className="card">
      <div className="image"
        onMouseEnter={() => { setIsShowBtn(true); }}
        onMouseLeave={() => { setIsShowBtn(false); }}
      >
        <img
          src={image}
          alt="img"
          className={isShowBtn ? 'contarst' : ''}
        />
        {
          isShowBtn ?
            <Link to={`/DietPage/${id}`}
              className="moreBtn main-btn">
              Diet page
            </Link>
            : ''
        }
      </div>
      <div className="content">
        <h3>{title}</h3>
        <ul>
          <li>{price1} kcal</li>
          <li>{price2} kcal</li>
          <li>{price3} kcal</li>
        </ul>
        <p> {description} </p>
      </div>
      <div className={handledisplay()}>
        <span className="y-center">
          from
          <span>62 <small>zl</small></span>
          /day
        </span>
        <div className=" icons y-center gap-05">
          <FaHeart
            // size={}
            className={
              `like-icon
              ${isLiked ? 'active-like-icon' : ''}
            `
            }
            onClick={
              () => {
                if (user === null) {
                  setIsLogInRequest(true);
                } else {
                  handleLikedDietClick();
                }
              }
            }
          />

          <FaShoppingCart
            className={
              ` cart-icon
              ${isAddToCart ? 'active-cart-icon' : ''}
            `
            }
            onClick={
              () => {
                handleCartDietClick();
              }
            }
          />
        </div>
      </div>
    </div>
  );

};


export default Diet;
