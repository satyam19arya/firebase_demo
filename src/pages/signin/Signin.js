import React, {useState} from 'react';
import './Signin.scss';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";

const Signin = () => {
    const auth = getAuth(app);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signinUser = (e) => {
        e.preventDefault();
            signInWithEmailAndPassword(auth, email, password)
            .then((value) => console.log("Signin successfully"))
            .catch((err)=> console.log(err));
    };

  return (
    <div className="signin">
        <div className="signup-box">
            <h2 className="heading">Signin</h2>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    className="email" 
                    required 
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email}
                />

                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    className="password"  
                    required 
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password}
                />
                <button onClick={signinUser}>Signin</button>
        </div>
    </div>
  )
}

export default Signin;