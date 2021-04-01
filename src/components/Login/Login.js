import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./firebase.config";
import { useContext } from "react";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import './Login.css';
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
          console.log(res.user);
        const { displayName, email } = res.user;
        setLoggedInUser({
          isSignedIn: true,
          name: displayName,
          email: email
        });
        history.replace(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className='login-container'>
      <Container>
        <Link to='/home'><h2 className='text-success pt-5 font-italic'>DAILY CART</h2></Link>
        <div className='sign-in-container mx-auto shadow rounded'>
          <form action="">
            <h5>Your Email</h5>
            <input type="email" name="" placeholder='Enter email' className='form-control my-3' id=""/>
            <h5>Password</h5>
            <input type="password" name="" placeholder='Enter password' className='form-control my-3' id=""/>
          </form>
          <h6 className='text-center'>Or,</h6>
          <button className='btn btn-success rounded-pill btn-block my-3' onClick={handleGoogleSignIn}>Sign In With Google</button>
        </div>
      </Container>
    </div>
  );
};

export default Login;
