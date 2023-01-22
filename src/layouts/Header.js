import React, { useContext, useEffect, useState, } from 'react';
import { logo } from '../utils/Images';
import { NavLink, Link } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import AuthContext from '../contexts/AuthContext';
import { auth } from './Firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import DataContext from '../contexts/DataContext';
import { GrCart } from 'react-icons/gr';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiLogIn, FiLogOut } from 'react-icons/fi';

const Header = () => {
  const {
    isLogInRequest,
    setIsLogInRequest,
    isLogUpRequest,
    user,
    setUser,
    hideScroll,
    showScroll,
    logout
  } = useContext(AuthContext);

  const {
    cartDiets,
    likedDiets
  } = useContext(DataContext);


  const [fixedHeader, setFixedHeader] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [isShowBarMenu, setIsShowBarMenu] = useState(false);

  // hide the bar menu when  the click occurred outside of  menu bar ----------
  useEffect(() => {
    document.addEventListener("click", handleClickOutsideBarMenu);
    return () => {
      document.removeEventListener("click", handleClickOutsideBarMenu);
    };
  }, []);

  const handleClickOutsideBarMenu = (event) => {
    if (!event.target.closest(".bar-menu")) {
      setIsShowBarMenu(false);
    }
  };

  //---------- 



  // hide the bar menu when  the click occurred outside of  menu bar ----------
  useEffect(() => {
    document.addEventListener("click", handleClickOutsideUserInfo);
    return () => {
      document.removeEventListener("click", handleClickOutsideUserInfo);
    };
  }, []);

  const handleClickOutsideUserInfo = (event) => {
    if (!event.target.closest(".user-info")) {
      setShowUserInfo(false);
    }
  };

  //---------- 




  useEffect(() => {
    setShowUserInfo(false);
  }, [cartDiets, likedDiets]);

  //show and hide barMenu
  const showBarMenu = () => {
    // setIsShowBarMenu(!isShowBarMenu);
  };

  useEffect(() => {
    setIsShowBarMenu(false);
  }, []);



  //* save Current user Info onAuthStateChanged
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  //* Main header To Fixed Header
  window.onscroll = () => {
    let topScroll = document.documentElement.scrollTop;
    topScroll > 400 ? setFixedHeader(true) : setFixedHeader(false);
  };

  //*manage the page scroll 
  useEffect(() => {
    (isLogInRequest || isLogUpRequest) ? hideScroll() : showScroll();
  }, [isLogInRequest, isLogUpRequest]);

  return (
    <header className={fixedHeader ? ' opacity fixed-header' : ''}>
      <div className="container m-gap y-center space-between">

        <Link to="/" className="logo y-center">
          <img src={logo} alt="logo" className="img-fix" />
          <h1>FitMe</h1>
        </Link>



        {/* <i className="fa-solid fa-bars bar-menu" onClick={() => { setIsShowBarMenu(!isShowBarMenu); }}></i> */}


        <nav className="nav">
          <ul className={isShowBarMenu ? 'm-gap flex show-nav' : 'm-gap flex'}>

            {
              (window.location.pathname === '/') ? '' :
                <li> <NavLink to="/" onClick={showBarMenu}> Home </NavLink> </li>
            }
            <li>
              <NavLink to="/CaloriesPage" onClick={showBarMenu}> calorie calculator </NavLink>
            </li>
            <li>
              <NavLink to="/MenuPage" onClick={showBarMenu}> menu </NavLink>
            </li>
            <li>
              <NavLink to="/DeliveryPage" onClick={showBarMenu}> delivery </NavLink>
            </li>
            <li>
              <NavLink to="/AboutPage" onClick={showBarMenu}> about us </NavLink>
            </li>
            <li>
              <NavLink to="/FAQPage" onClick={showBarMenu}> faq </NavLink>
            </li>
          </ul>
        </nav>
        <i className="fa-solid fa-bars bar-menu" onClick={() => { setIsShowBarMenu(!isShowBarMenu); }}></i>
        <div className="flex y-center gap-05">
          <Link to="/CartPage" className="flex">
            <GrCart className="cart-icon" />
            <small className="cart-items-count">
              {(cartDiets.length === 0) ? 0 : cartDiets.length}
            </small>
          </Link>

          {
            (user !== null) ?
              <Link to="/WishlistPage" className="flex ">
                <AiOutlineHeart className='heart-icon' />
                <small className="cart-items-count">
                  {(likedDiets.length === 0) ? 0 : likedDiets.length}
                </small>
              </Link>
              :
              null
          }
          {

             (user === null) ?
              <Link to='/'>
                <FiLogIn className="login-icon" onClick={() => { setIsLogInRequest(true); }} />
              </Link>
              :
              <Link to='/'>
                <FiLogOut className="logout-icon" onClick={logout} />
              </Link>
          }
        </div>

      </div>
      {isLogInRequest ? <SignIn /> : ''}
      {isLogUpRequest ? <SignUp /> : ''}

    </header >
  );
};

export default Header;;
