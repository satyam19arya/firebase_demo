import React from 'react';
import './Authentication.css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";

const Authentication = () => {
  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);

  const signupUser = async () => {
    const userCredential = await createUserWithEmailAndPassword(auth, "satyam19arya@gamil.com", "Demo123456");
    console.log(userCredential);
  }

  return (
    <div className="authentication">
      <h3>Click here 👇<br/></h3>
      <button onClick={signupUser}>Create user</button>
    </div>
  )
}

export default Authentication;