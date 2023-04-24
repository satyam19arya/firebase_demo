import React, { useEffect, useState } from 'react';
import './Realtime.css';
import { getDatabase, ref, child, get,  onValue } from "firebase/database";
import { app } from "../../firebase";

const Realtime = () => {
  const database = getDatabase(app);
  const dbRef = ref(getDatabase());
  const [name,setName] = useState("");

  const getData = async () => {
    get(child(dbRef, "users/satyam")).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
          } else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });
  }

  useEffect(() => {
    onValue(ref(database, 'users/satyam'), (snapshot) => {
      console.log(snapshot.val());
      setName(snapshot.val().name);
    }) // eslint-disable-next-line
  }, []);

  return (
    <div className="realtime">
      <h3>Realtime database</h3>
      <h3>Click here to get Data 👇</h3>
      <button onClick={getData}>Get Data</button>
      <h2>My name is {name}</h2>
    </div>
  )
}

export default Realtime;