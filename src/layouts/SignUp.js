import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../utils/Images';
import '../assets/css/login_style.css';
import AuthContext from '../contexts/AuthContext';

const LogIn = () => {

  const {
    setRegisterUserName,
    setIsLogInRequest,
    setIsLogUpRequest,
    setRegisterEmail,
    setRegisterPassword,
    register,
    signUpError,
  } = useContext(AuthContext);


  const handleLogInAndLogOutRequests = () => {
    setIsLogUpRequest(false); setIsLogInRequest(true);
  };

  return (

    <section className="log-in">
      <div className="content">
        <i className="fa-solid fa-xmark close-icon" onClick={
          () => { setIsLogUpRequest(false); }
        }>
        </i>
        <div className="sign-in">
          <Link to="/" className="logo y-center gap-1">
            <img src={logo} alt="logo" className="img-fix" />
            <h1>FitMe</h1>
          </Link>
          <div className="info">
            <div className="titles">
              <h2>Welcome To FiMe</h2>
              <h3>Plies enter your details.</h3>
            </div>
            <form action="">
              <div className="email">
                <label htmlFor="#">UserName</label>
                <input type="text" name="UserName" onChange={
                  (e) => { setRegisterUserName(e.target.value); }
                }
                />
              </div>
              <div className="email">
                <label htmlFor="#">Email</label>
                <input type="email" name="email" onChange={
                  (e) => { setRegisterEmail(e.target.value); }
                }
                />
              </div>

              <div className="password">
                <label htmlFor="#">Password</label>
                <input type="password" name="password" onChange={
                  (e) => { setRegisterPassword(e.target.value); }
                }
                />
                <p className='err'>{signUpError}</p>
              </div>
              <p className={"msg-err"}></p>
              <Link to="#" className="main-btn" onClick={
                () => { register(); }
              }
              >
                Create Account
              </Link>
            </form>
            <p className='sign-up'>you are already have in account? <button
              onClick={handleLogInAndLogOutRequests}>
              Sign in
            </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
