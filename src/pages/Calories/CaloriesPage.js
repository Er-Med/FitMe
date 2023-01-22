import React, { useState } from 'react';
import TanslateOpacity from '../../utils/TranslateOpacity.js';
import '../../assets/css/CaloriesPage_style.css';
import CalcolatorInfo from '../../data/CalcolatorInfo.js';
import { FcBusinessman, FcBusinesswoman } from 'react-icons/fc';


function Calories() {
  // active class
  const [activeIndex, setActiveIndex] = useState(0);
  const handleActiveIndex = index => {
    setActiveIndex(index);
    console.log(index);
  };


  //* we use id and not index because index can be changed when the array changed
  let calcolator = CalcolatorInfo.find(item => item.id === activeIndex);


  const [gender, setGender] = useState(null);
  let [weight, setWeight] = useState(0);
  let [height, setHeight] = useState(0);
  let [age, setAge] = useState(0);
  let [result, setResult] = useState(0);


  const handleAge = (e) => {
    setAge(e.target.value);
    console.log(age);
  };
  const handleWeight = (e) => {
    setWeight(e.target.value);
    console.log(weight);
  };
  const handleHeight = (e) => {
    setHeight(e.target.value);
    console.log(height);
  };


  const handleResult = () => {
    setResult(calcolator.calcBMR(gender, weight, height, age));
    console.log(result);
  };

  return (
    <section className={TanslateOpacity() ? 'calories show-item' : 'calories hide-item'}>
      <div className="container">
        <div className="content y-center">
          <div className="calculator flex flex-column">

            <div className="type">
              <ul className='wrap'>
                <li
                  className={(activeIndex === 0) ? 't-center grow active-l' : 't-center grow'}
                  onClick={() => handleActiveIndex(0)}
                >
                  Calculator BMR
                </li>
                <li
                  className={(activeIndex === 1) ? 't-center grow active-l' : 't-center grow'}
                  onClick={() => handleActiveIndex(1)}
                >
                  Calculator BMI
                </li>
                <li
                  className={(activeIndex === 2) ? 't-center grow active-l' : 't-center grow'}
                  onClick={() => handleActiveIndex(2)}
                >
                  Calculator PPM
                </li>
                <li
                  className={(activeIndex === 3) ? 't-center grow active-l' : 't-center grow'}
                  onClick={() => handleActiveIndex(3)}
                >
                  water Calculator
                </li>
              </ul>
            </div>
            <div className="desc">
              <h2>{calcolator.calcolatorTitle}</h2>
              <p>{calcolator.calcolatorDesc}</p>
            </div>

            <div className="gender">
              <span onClick={() => setGender("man")}>
                <FcBusinessman className={
                  (gender !== 'man' ? " man fa-3x "
                    : 'fa-solid fa-person fa-3x man clicked '
                  )}
                />
              </span>
              <span onClick={() => setGender("women")}>
                <FcBusinesswoman className={
                  (gender !== 'women' ? " women fa-3x "
                    : 'fa-solid fa-person fa-3x women clicked'
                  )}
                />
              </span>
            </div>

            <form action="">
              <div className='flex-1'>
                <label htmlFor="">Age</label>
                <input type="number" id="age" min={6} max={120}
                  onChange={(e) => handleAge(e)}
                />
              </div>
              <div className='flex-1'>
                <label htmlFor="">Weight(kg)</label>
                <input type="number" id="weight" min={15} max={200}
                  onChange={(e) => handleWeight(e)}
                />
              </div>

              <div className='flex-1'>
                <label htmlFor="">Activity level</label>
                <select name="" id="">
                  <option value="" defaultValue >Choose</option>
                  <option value="" >Sedentary: little or no exercise</option>
                  <option value="" >Exercise 1-3 times/week</option>
                  <option value="" >Exercise 4-5 times/week</option>
                  <option value="" >Exercise 4-5 times/week</option>

                </select>
              </div>
              <div className='flex-1'>
                <label htmlFor="">Height(cm)</label>
                <input type="number" id="height" min={15} max={200}
                  onChange={(e) => handleHeight(e)}
                />
              </div>

            </form>
            <div className='flex y-center space-between'>
              <button className="main-btn calc" onClick={() => {
                handleResult();
              }}>
                Calculate
              </button>
              <p className='result'>{result}</p>
            </div>
          </div>
          <div className="order">
            <h2 className='main-h2'>Can't you Coohse your order?</h2>
            <p>
              loremy any diet to Choosediet to Choose the right one fodiet to Choose the right one for you r you the right one for you
            </p>
            <div className="contact wrap flex f-evenly gap-1">
              <span className="y-center grow">
                <small>Phone </small>
                <p>05 94 10 38 69</p>
              </span>
              <span className="y-center grow">
                <small>Email </small>
                <p>mohamedermili@gmail.com</p>
              </span>
            </div>
          </div>
        </div>
        <div className="calculator-questions flex wrap ">
          <div className="question flex-1 mn-w-45 t-left">
            <h2 className="main-h2">TMR Calculator - What is it</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam provident molestias illum vel nisi! Quo quos numquam enim et saepe nihil? Esse natus accusamus tempora saepe quo eum quaerat ducimus?
            </p>
          </div>
          <div className="question flex-1 mn-w-45 t-left">
            <h2 className="main-h2">TMR Calculator - What is it</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam provident molestias illum vel nisi! Quo quos numquam enim et saepe nihil? Esse natus accusamus tempora saepe quo eum quaerat ducimus?
            </p>
          </div>
        </div>
      </div>
    </section >

  );
}

export default Calories;
