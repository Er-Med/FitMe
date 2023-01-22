import { useContext, useEffect, useState } from "react";
import DataContext from "../../contexts/DataContext";
function CartItem({ img, title, price, category, id, desc }) {
  const {
    handleRemoveFromWishlist
  } = useContext(DataContext);


  return (
    <section className="diet-detailes">
      <div className="container">
        <div className="image">
          <div className='flex y-center space-between'>
          </div>
          <img src={img} alt="dietimage" />
        </div>

        <div className="info flex flex-column gap-1_5">

          <div className="title flex y-cente flex-column gap-05">
            <div className="uppercase">
              <h1 className='fw-600'>{title}</h1>
              <h3 className='fw-600'>{category} </h3>
            </div>
            <div className="desc">
              <p>
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi .
              </p>
            </div>
          </div>

          <div className="calcs flex  space-between uppercase">
            <div className="price flex y-center gap-05">
              <h3 className='fw-600'> price :</h3>
              <p> ${price}</p>
            </div>

            <div className="rate y-center gap-1 space-between">
              <div className='flex gap-02'>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <span> 4.1 </span>
              </div>
            </div>
          </div>
        </div>
        <i className="fa-solid fa-xmark remove-icon" onClick={() => handleRemoveFromWishlist(id)
        }
        >
        </i>
      </div>

    </section >
  );
}

export default CartItem;
