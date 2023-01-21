import { useCallback, useContext, useEffect, useState } from "react";
import DataContext from "../../contexts/DataContext";
import DietsCollection from "../../data/DietsCollection";


function CartItem({ img, title, price, total, category, id, }) {

  const [dietQuantity, setdietQuantity] = useState(1);
  const [itemTotalPrice, setItemTotalPrice] = useState(price);

  const {
    handleRemoveFromCart,
  } = useContext(DataContext);



  useEffect(() => {
    const totalPrice = dietQuantity * price;
    setItemTotalPrice(totalPrice);
    updateTotal(totalPrice);
  }, [dietQuantity]);


  const updateTotal = useCallback((newTotal) => {
    DietsCollection.map((item) => {
      if (item.id === id) {
        console.log(item.total);
        item.total = newTotal;
        console.log(item.total);
      }
    });
  }, [id]);

  const dietQuantityInc = () => {
    setdietQuantity(dietQuantity + 1);
  };

  const dietQuantityDec = () => {
    return (dietQuantity !== 1) ? setdietQuantity(dietQuantity - 1) : '';
  };


  return (
    <section className="diet-detailes">
      <div className="container">
        <i className="fa-solid fa-xmark remove-icon" onClick={() => handleRemoveFromCart(id)}
        >
        </i>
        <div className="image">
          <div className='flex y-center space-between'>
          </div>
          <img src={img} alt="dietimage" />
        </div>

        <div className="info flex flex-column gap-1_5">
          <div className="title flex uppercase y-center space-between">
            <div>
              <h1 className='fw-600'>{title}</h1>
              <h3 className='fw-600'>{category} </h3>
            </div>
            <div className="">

            </div>
          </div>
          <div className="calcs flex  space-between uppercase">
            <div className="price flex flex-column">
              <h3 className='fw-600'> price</h3>
              <p> ${price}</p>
            </div>
            <div className="quantity">
              <h3 className='fw-600 text-center'> quantity </h3>
              <div className="calc-quantity flex y-center gap-2">
                <span className="center" onClick={() => { dietQuantityDec(); }}>
                  -
                </span>
                <p>{dietQuantity}</p>
                <span className="center" onClick={() => { dietQuantityInc(); }}>
                  +
                </span>
              </div>
            </div>

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
            <div className="total-price flex y-center gap-05">
              <p className="uppercase fw-600">Total price</p>
              <span className="total-price fz-1_5 fw-600">${itemTotalPrice}</span>
            </div>
          </div>
          <div className="sell flex y-center space-between">
          </div>
        </div>
      </div>

    </section >
  );
}

export default CartItem;

// handleRemoveFromCart(item.id)