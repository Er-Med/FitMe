import React, { useContext, useState, } from 'react';
import TanslateOpacity from '../../utils/TranslateOpacity.js';
import DietsCollection from '../../data/DietsCollection';
import '../../assets/css/MenuPage_style.css';
import Diet from '../../utils/Diet';



function Menu() {

  const [activeIndex, setActiveIndex] = useState(0);
  const [filteredDietCollection, setFilteredDietCollection] = useState(DietsCollection);

  // active class
  const handleClick = index => {
    setActiveIndex(index);
  };


  //filter diets by categories 
  const onChangeHandler = (dietCategory) => {
    const result = DietsCollection.filter((diet) => {
      return diet.categories === dietCategory;
    });
    setFilteredDietCollection(result);
  };

  DietsCollection[0].carted = true;

  return (

    <section className={TanslateOpacity() ? 'menuu show-item' : 'menuu hide-item'}>
      <div className="container">
        <h2 className="main-h2"> Menu </h2>
        <div className="categories  y-center space-between wrap">
          <ul className="flex gap-1 flex-1 wrap">
            <li className={(activeIndex === 0) ? 't-center grow active-l' : 't-center grow'}
              id='all'
              onClick={() => {
                setFilteredDietCollection(DietsCollection); handleClick(0);
              }}
            >
              all
            </li>
            <li
              className={(activeIndex === 1) ? 't-center grow active-l' : 't-center grow'}
              onClick={() => {
                onChangeHandler("breakfast"); handleClick(1);
              }}
              id='breakfast'
            >
              Breakfast
            </li>
            <li
              className={(activeIndex === 2) ? 't-center grow active-l' : 't-center grow'}
              onClick={() => {
                onChangeHandler("lunch"); handleClick(2);
              }}
              id='lunch'
            >
              Lunch
            </li>
            <li
              className={(activeIndex === 3) ? 't-center grow active-l' : 't-center grow'}
              onClick={() => {
                onChangeHandler("dinner"); handleClick(3);
              }}
              id="dinner"
            >
              Dinner
            </li>
          </ul>
        </div>
        <div className="diets-container">
          {
            filteredDietCollection.map((item) => (

              <Diet key={item.id}
                image={item.image}
                title={item.title}
                price1={item.prices[0]}
                price2={item.prices[1]}
                price3={item.prices[2]}
                description={item.description}
                id={item.id}
              />
            ))
          }
        </div>
      </div>
    </section>
  );

}

export default Menu;