import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';

import TanslateOpacity from '../../utils/TranslateOpacity.js';
import { apple, avocado, blog1, blog2, blog3, blog4, leftBigImg, rightBigImg, smallRightImg, smallLeftImg } from '../../utils/Images';
import Diet from '../../utils/Diet';

import DietsCollection from '../../data/DietsCollection.js';

import Delivery from "../Delivery/DeliveryPage";
import FAQ from "../Faq/FAQPage";


import Testimonial from './Testimonail';
import BlogItem from './BlogItem';

import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineArrowUp } from "react-icons/ai";
import { FaLongArrowAltRight, FaQuoteRight } from "react-icons/fa";

import '../../assets/css/Diet_style.css';
import '../../assets/css/MainStyle.css';


//filter popularDietList from DietsCollection
const popularDietList = DietsCollection.filter((diet) => {
  return diet.popular === true;
});

function Home() {
  const cardContainer = useRef();

  function next() {
    const cardWidth = cardContainer.current.offsetWidth;
    cardContainer.current.scrollLeft += cardWidth;
  }

  function pre() {
    const cardWidth = cardContainer.current.offsetWidth;
    cardContainer.current.scrollLeft -= cardWidth;
  }

  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      let topScroll = document.documentElement.scrollTop;
      topScroll > 500 ? setScrollTop(true) : setScrollTop(false);
      console.log("scroll");
    };
  }, []);

  return (
    <>
      <>
        <button
          className={scrollTop ? 'up-btn show-up-btn' : 'up-btn'}
          onClick={() => (window.scrollTo(0, 0))}
          title="scroll to top"
          aria-label="scroll to top"
        >
          <AiOutlineArrowUp className="arrow-up" />
        </button>
      </>

      <section className={TanslateOpacity() ? 'main show-item' : 'main hide-item'}>
        <div className="right-img">
          <img src={rightBigImg} alt="diet  plat" />
        </div>
        <div className="s-right-img">
          <img src={smallRightImg} alt="diet  plat" />
        </div>
        <div className="left-img">
          <img src={leftBigImg} alt="diet plat" />
        </div>
        <div className="s-left-img">
          <img src={smallLeftImg} alt="diet plat" />
        </div>
        <div className="container center">

          <div className="imagee">
          </div>
          <div className="content">
            <h1>
              Premium quality catering diets
              <img src={apple} alt="apple" />for<img src={avocado} alt="avocado" /> exacting
            </h1>
            <p>
              If you’re ready to commit to making a fundamental change in your life, we have real solutions that offer a straightforward, approach to effective, practical, and healthy weight loss.
            </p>
            <div className="links center m-gap">
              <Link href="/MenuPage" className="main-btn" title="Adjust-diet">Adjust diet</Link>
              <Link className="video center" href="/" title="video-center"></Link>
              <Link href="/" title="watch video" >watch video</Link>
            </div>
          </div>
        </div>
      </section>


      <section className="tistimoniels" >
        <div className="container">
          <div className="qoute gap-1 flex-1">
            <h2 className="main-h2">
              We coock - they injoy every moment of thier
              <FaLongArrowAltRight className="arrow-right-long" />
              lives
            </h2>
            <div>
              <small>Because we ...</small>
              <p>
                <FaQuoteRight className="quote-icon" />
                Lorem ipsum dolor sit, amet consectetur adipisicing elitdolor reiciendis voluptatum. Voluptatibus quia tenetur consectetur iusto dolorum cupiditate, temporibus itaque dolor reiciendis voluptatum.
              </p>
            </div>
          </div>
          <div className="itemes flex-1">
            <div className="c">
              <Testimonial
                name={"Guy Hawkins ---"}
                description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, cum."}
              />
              <Testimonial
                name={"Ester Howard ---"}
                description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, expedita."}
              />
            </div>

            <div className="c">
              <Testimonial
                name={"Anonim ---"}
                description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, voluptatum!"}
              />
              <Testimonial
                name={"Jakob jones --- "}
                description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ipsum dolor"}
              />
            </div>

          </div>
        </div>
      </section>

      <section className="diets">
        <div className="container">
          <h2 className="main-h2">The most popular diets</h2>
          <div className="directions">
            <AiOutlineArrowLeft className="left-arrow" onClick={pre} />
            <AiOutlineArrowRight className="right-arrow" onClick={next} />
          </div>
          <div className="slider-shadow">
            <div className="slider-container" ref={cardContainer}>
              {
                popularDietList.map((item) => (
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
        </div>
      </section>


      <Delivery />


      <section className="trail">
        <div className="container x-center">
          <div className="content">
            <img src="" alt="" />
            <img src="" alt="" />
            <h2 className="main-h2">Order your trail diet</h2>
            <p>try any diet to Choose the right one for you </p>
            <Link to="/MenuPage" className="main-btn" title="diet">Choose a diet</Link>
          </div>
        </div>
      </section>

      <section className="recipe">
        <div className="container">
          <h2 className="main-h2">Boxes diet with which you get more</h2>
          <div className="content">
            <div className="">
              <i className="fa-solid fa-leaf"></i>
              <h3>fresh</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div>
              <i className="fa-solid fa-utensils"></i>
              <h3>Taste</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div>
              <i className="fa-solid fa-bowl-rice"></i>
              <h3>Diversity</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div>
              <i className="fa-solid fa-dumbbell"></i>
              <h3>Match</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="blog">
        <div className="container">
          <h2 className="main-h2">blog</h2>
          <div className="content flex m-gap">
            <div className="main-blog flex-1 flex flex-column space-between">
              <div className="image"><img src={blog1} alt="" className="img-fix" /></div>
              <div className="desc">
                <div className="title-and-time y-center">
                  <h3>
                    Vitamin C - what has most vitamin C?
                  </h3>
                  <div> <i className="fa-regular fa-clock"></i> <small>min read</small> </div>
                </div>
                <span>ipsum lorem</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit corporis asperiores, velit nostrum eius distinctio ut veritatis perspiciatis voluptate quis!
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
            </div>

            <div className="other-blogs flex-1">
              <BlogItem
                imgUrl={blog2}
                title={'Fast food - why should we avoid it?'}
                description={
                  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit corporis...'
                }
                author={'jerous beln'}
              />

              <BlogItem
                imgUrl={blog3}
                title={'Blood tests - why should they be  done regularly?'}
                description={
                  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit corporis...'
                }
                author={'jerous beln'}
              />

              <BlogItem
                imgUrl={blog4}
                title={'sweets on a diet - can you eat them?'}
                description={
                  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit corporis...'
                }
                author={'jerous beln'}
              />
            </div>
          </div>
        </div>
      </section>

      <FAQ />


    </>
  );
}

export default Home;