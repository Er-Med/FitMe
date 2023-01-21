import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../contexts/DataContext";
import DietsCollection from "../../data/DietsCollection";
import LikedItem from "./LikedItem";
import '../../assets/css/CartPage_style.css';

function CartPage() {

  const {
    likedDiets,
  } = useContext(DataContext);

  let wishlist = DietsCollection.filter((item) => {
    return likedDiets.includes(item.id);
  });


  return (
    <>
      {
        (wishlist.length === 0) ?
          (
            <div className="No-diets-added-msg">
              <h1 className="text-center"> Wishlist is Empty </h1>
              <Link to='/MenuPage' className="main-btn">Add Diets</Link>
            </div>
          )
          : (

            wishlist.map((item) => (

              <LikedItem key={item.id}
                id={item.id}
                desc={item.description}
                img={item.image}
                title={item.title}
                category={item.categories}
                price={item.price}

              />

            ))
          )
      }
    </>
  );
}

export default CartPage;