import React, {useState} from "react";
import "./scss/main.scss";
import Login from "./pages/login";////do i NEED THIS?
import LoginForm from "./components/LoginForm";
import Dashboard from "./pages/dashboard";
import { Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  //////////////////Admin user normally in a DB////////////////
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }
  //////////////////////////////////////////////////////////////
  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");
  ///Want to call this login function from within our form
  
  const Login = details => {
  console.log(details);
  if (details.email == adminUser.email && details.password == adminUser.password) {
    console.log("logged in");
    setUser ({
      name:details.name,
      email:details.email
    });
  } else {
    console.log("Details do not match!");
    ////MUST SET OUR ERRORS
    setError ("Details do not match!");
  }
}


  
  const Logout = () => {
    console.log("Logout");
    setUser({name: "", email: ""});
  }
/////////////////////////////////////////////////////////////





  return (
    <div className="App">
      {(user.email != "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ): (
        <LoginForm Login={Login} error={error}/>
      )}
      {/* <NavBar /> */}
      {/* <Route exact path="/" component={Login} /> */}
      {/* <Route exact path="/dashboard" component={Dashboard} /> */}
    </div>
  );
}

export default App;
