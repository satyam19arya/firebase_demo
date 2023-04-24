import React, {useState} from 'react';
import './Signup.scss';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Signup = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signupUser = async () => {
        try{
            await createUserWithEmailAndPassword(auth, email, password);
        }catch(e){
            console.error("User already exists");
        }
    }

    const signupwithgoogle = async (result) => {
        await signInWithPopup(auth, provider);
    }

  return (
    <div className="signup">
        <div className="signup-box">
            <h2 className="heading">Signup</h2>
                <label htmlFor="email">Email</label>
                <input type="email" className="email" required onChange={(e) => setEmail(e.target.value)} value={email}/>

                <label htmlFor="password">Password</label>
                <input type="password" className="password" required onChange={(e) => setPassword(e.target.value)} value={password}/>
                <button onClick={signupUser}>Signup</button>
                <br/>
                <button onClick={signupwithgoogle}>Sign in with Google</button>
        </div>
    </div>
  )
}

export default Signup;