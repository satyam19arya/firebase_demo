import React from 'react';
import './FireStore.css';
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, doc, getDoc, query, where, getDocs, updateDoc } from "firebase/firestore"; 
import { app } from "../../firebase";

const FireStore = () => {
  const db = getFirestore(app);

  const addData = async () => {
    try{
        const docRef = await addDoc(collection(db, "users"), {
          first: "Satyam",
          last: "Arya",
          born: 2002
        });
        console.log("Document written with ID: ", docRef.id);
      }catch(e){
        console.error("Error adding document: ", e);
      }
  }

  const getData = async () => {
    const docRef = doc(db, "users", "2gx6yo2MOKeiS8dscciD");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
  }

  const getDatabyQuery = async () => {
    const userRef = collection(db, "users");
    const q = query(userRef, where("born", "==", 2002));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    });
  }

  const updateData = async () => {
    const usersRef = doc(db, 'users', '2gx6yo2MOKeiS8dscciD');
    await updateDoc(usersRef, {
        born: 2001
    });
  }

  return (
    <div className='firestore'>
      <h3>Click here to add data to firestore 👇</h3>
      <button onClick={addData}>Add Data</button>
      <h3>Click here to get data from firestore 👇</h3>
      <button onClick={getData}>Get Data</button>
      <h3>Click here to get data by query from firestore 👇</h3>
      <button onClick={getDatabyQuery}>Get Data by Query</button>
      <h3>Click here to update Data 👇</h3>
      <button onClick={updateData}>Update Data</button>
    </div>
  )
}

export default FireStore;