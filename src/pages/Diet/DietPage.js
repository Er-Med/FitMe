import '../../assets/css/DietPage_style.css';
import { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import DietsCollection from '../../data/DietsCollection';
import AuthContext from '../../contexts/AuthContext';
import DataContext from '../../contexts/DataContext';

const DietPage = () => {
  const {
    setIsLogInRequest,
    user,
  } = useContext(AuthContext);

  const {
    handleCartClick
  } = useContext(DataContext);


  const [likeEvent, setLikeEvent] = useState(false);
  const [dietQuantity, setdietQuantity] = useState(1);

  const { dietId } = useParams();
  const dietIdNb = parseInt(dietId);
  const diet = DietsCollection.find(
    (item) => item.id === dietIdNb
  );

  const countTotalPrice = () => diet.price * dietQuantity;
  const prev = () => (dietIdNb > 0) ? dietIdNb - 1 : 0;
  const next = () => (dietIdNb < 11) ? dietIdNb + 1 : 11;

  const likeEventHandler = () => likeEvent ? "like-event" : "likes";

  return (
    <section className="diet-detailes">
      <div className='flex y-center space-between pb-1'>
        <Link to={`/DietPage/${prev()}`} className="prev" >
          <i className="fa-solid fa-arrow-left"> </i>
        </Link>
        <Link to={`/DietPage/${next()}`} className="next">
          <i className="fa-solid fa-arrow-right"> </i>
        </Link>
      </div>

      <div className="container">
        <div className="image">
          <div className='flex y-center space-between'>
          </div>
          <img src={diet.image} alt="dietimage" />
        </div>

        <div className="info flex flex-column gap-1_5">
          <div className="title flex uppercase y-center space-between">
            <div>
              <h1 className='fw-600'>{diet.title}</h1>
              <h3 className='fw-600'> {diet.categories} </h3>
            </div>
            <div className={likeEventHandler()} onClick={() => setLikeEvent(!likeEvent)}>
              <i className="fa-solid fa-heart fz-1_5"></i>
            </div>
          </div>
          <div className="calcs flex  space-between uppercase">
            <div className="price flex flex-column">
              <h3 className='fw-600'> price</h3>
              <p> ${diet.price}</p>
            </div>
            <div className="total-price">
              <p className="uppercase fw-600">Total price</p>
              <span className="total-price fz-1_5 fw-600">${countTotalPrice()}</span>
            </div>
          </div>
          <div className="description">
            <h2 className='uppercase fw-600'> description </h2>
            <p>
              {diet.detailes}
            </p>
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
            <div className="add-to-Cart gap-1">
              <button className='main-btn y-center gap-05'>
                <i className="fa-solid fa-basket-shopping"></i>
                <span className="fz-1 fw-600"
                  onClick={
                    () => {
                      (user === null) ?
                        setIsLogInRequest(true)
                        : handleCartClick(dietId);
                    }
                  }
                > Add To Cart
                </span>
              </button>
            </div>
          </div>
          <div className="sell flex y-center space-between">
          </div>
        </div>
      </div>
    </section >
  );
};

export default DietPage;