import React, { useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../layouts/Firebase-config';
import DataContext from './DataContext';

const AuthContext = React.createContext(null);


export const AuthContextProvider = ({ children }) => {

  const {
    setCartDiets,
    setLikedDiets,
  } = useContext(DataContext);

  const hideScroll = () => {
    document.body.style.overflow = "hidden";
  };
  const showScroll = () => {
    document.body.style.overflow = "visible";
  };


  const [isLogInRequest, setIsLogInRequest] = useState(false);
  const [isLogUpRequest, setIsLogUpRequest] = useState(false);


  const [registerUserName, setRegisterUserName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [signUpError, setSignUpError] = useState('');
  const [signInError, setLogInError] = useState('');
  const [signOutError, setSignOutError] = useState('');

  const [user, setUser] = useState({});

  // *test

  let getUserName = () => {
    let index = registerEmail.indexOf('@');
    let userName = registerEmail.slice(0, index);
    return userName;
  };


  //*signup
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );

      user.displayName = registerUserName;
      setIsLogInRequest(false);
      setIsLogUpRequest(false);

    } catch (error) {
      setSignUpError(error.message);
    }
  };

  //*login
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      setRegisterEmail(user.email);
      setIsLogInRequest(false);
      setIsLogUpRequest(false);

    } catch (error) {
      setLogInError(error.message);
    }
  };

  //*logout
  const logout = async () => {
    localStorage.clear();
    setCartDiets([]);
    setLikedDiets([]);
    await signOut(auth);
  };


  const value = {
    isLogInRequest,
    setIsLogInRequest,
    isLogUpRequest,
    setIsLogUpRequest,
    registerUserName,
    setRegisterUserName,
    registerEmail,
    setRegisterEmail,
    registerPassword,
    setRegisterPassword,
    loginEmail,
    setLoginEmail,
    loginPassword,
    setLoginPassword,
    register,
    login,
    logout,
    hideScroll,
    showScroll,
    user,
    setUser,
    signUpError,
    signInError,
    getUserName,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthContext; 