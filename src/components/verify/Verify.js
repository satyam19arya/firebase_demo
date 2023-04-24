import { getDatabase, ref, set } from "firebase/database";
import { app } from "../../firebase";
import React from 'react';
import './Verify.css';

const Verify = () => {
    const db = getDatabase(app);

    const putData = () => {
      set(ref(db, "users/satyam"), {
        id: 1,
        name: 'Satyam Arya',
        age: 20,
      })
    };

  return (
    <div className="verify">
      <h3>Click here 👇<br/></h3>
      <button onClick={putData}>Put Data</button>
    </div>
  )
}

export default Verify;