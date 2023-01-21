import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../utils/Images';
import '../assets/css/login_style.css';
import AuthContext from '../contexts/AuthContext';

const SignIn = () => {

  const {
    setIsLogInRequest,
    setIsLogUpRequest,
    setLoginEmail,
    setLoginPassword,
    login,
    signInError
  } = useContext(AuthContext);

  const handleLogInAndLogOutRequests = () => {
    setIsLogInRequest(false); setIsLogUpRequest(true);
  };

  return (
    <section className="log-in">
      <div className="content">
        <i className="fa-solid fa-xmark close-icon" onClick={
          () => {
            setIsLogInRequest(false);
          }}
        >
        </i>
        <div className="sign-in">
          <Link to="/" className="logo y-center gap-1">
            <img src={logo} alt="logo" className="img-fix" />
            <h1>FitMe</h1>
          </Link>
          <div className="info">
            <div className="titles">
              <h2>Welcome Back</h2>
              <h3>Plies enter your details.</h3>
            </div>
            <form action="">
              <div className="email">
                <label htmlFor="#">Email</label>
                <input type="email" name="email" onChange={(e) => {
                  setLoginEmail(e.target.value);
                }}
                />
              </div>
              <div className="password">
                <label htmlFor="#">Password</label>
                <input type="password" name="password" onChange={
                  (e) => { setLoginPassword(e.target.value); }
                }
                />
                <p className='err'>{signInError}</p>
              </div>
              <p className={"msg-err"}></p>
              <p className="forgot">Forgot password</p>
              <Link to="#" className="main-btn" onClick={login}>
                Sign in
              </Link>
            </form>
            <p className='sign-up'>Don't have in account?
              <button onClick={handleLogInAndLogOutRequests}>
                Sign up
              </button>
            </p>
          </div>
        </div>
        <div className="slide">
        </div>
      </div>
    </section>
  );
};

export default SignIn;
