import React from "react";
import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);


function Login() {
  return (
    <div>
      <h1>Login</h1>

    </div>
  );
}

export default Login;
