import Authentication from "./components/authentication/Authentication";
import Verify from "./components/verify/Verify";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import { useEffect,useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import FireStore from "./components/fireStore/FireStore";
import Realtime from "./components/reatime/Realtime";

function App() {
  const auth = getAuth();
  const[user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        console.log(user);
        setUser(user);
      }else{
        console.log("You are logged out");
        setUser(null);
      }
    });
  }, [auth]);

  if(user===null){
    return (
      <div className="App">
       <Verify/>
       <Authentication/>
       <Signup/>
       <Signin/>
       <FireStore/>
       <Realtime/>
      </div>
    );
  }

  return (
    <div style={{textAlign:"center"}}>
      <h2>Hello {user.email}</h2>
      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  )
}

export default App;