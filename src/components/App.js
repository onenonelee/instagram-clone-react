import React, { useState, useEffect } from "react";
import "../styles/App.css";
import Header from "./Header";
import Feed from "./Feed";
import { db, auth } from "./Firebase";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    // state is not persistent but onAuthStateChaged keeps you logged in
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user has logged in
        console.log(authUser);
        setUser(authUser);
        /*
      if (authUser.displayName) {
        // dont update username
      } else {
        //if we just created someone...
        return authUser.updateProfile({
          displayName: username,
        });
      }
      */
      } else {
        // user has logged out...
        setUser(null);
      }
    });
  }, [user, username]);

  const signUp = (event) => {
    event.preventDefault();

    // create the user
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="App">
      <Header />
      <Feed />
    </div>
  );
}

export default App;
