import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../contexts/DataContext";
import DietsCollection from "../../data/DietsCollection";
import CartItem from "./CartItem";
import '../../assets/css/CartPage_style.css';

function CartPage() {

  const [totalAmount, setTotalAmount] = useState(0);
  const { cartDiets, } = useContext(DataContext);

  let cartItemsList = DietsCollection.filter((item) => {
    return cartDiets.includes(item.id);
  });



  // Calc total 
  function calcTotal() {
    const cartDietsTotal = cartItemsList.map((item) => {
      return item.total;
    });
    const total = cartDietsTotal.reduce((acc, curr) => acc + curr);
    setTotalAmount(total);
  }

  return (
    <>
      {
        (cartItemsList.length === 0) ?
          (
            <div className="No-diets-added-msg">
              <h1 className="text-center"> No Diets Added</h1>
              <Link to='/MenuPage' className="main-btn">Add Diets</Link>
            </div>
          )
          : (

            cartItemsList.map((item) => (

              <CartItem key={item.id}
                img={item.image}
                title={item.title}
                category={item.categories}
                price={item.price}
                cartItemsList={cartItemsList}
                id={item.id}
              />

            ))
          )
      }

      <div className="amount flex flex-column gap-1">
        <h2>SHOP NOW</h2>
        <div className="content flex y-center gap-1">
          <button className="calc-btn main-btn" onClick={() => calcTotal()}>
            Calc Total
          </button>
          <div className="total ">
            ${totalAmount}
          </div>
          <button className="pay main-btn">
            checkout 
          </button>
        </div>
      </div>
    </>
  );
}

export default CartPage;