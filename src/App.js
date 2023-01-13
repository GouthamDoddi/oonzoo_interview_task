import React, { useState } from "react";
import './App.css';


import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import MainPage  from "./pages/MainPage";


function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  const loggedIn = true
  const userDetails = {
    email: "example@gmail.com",
    name: 'example',
    role: 'non-admin'
  }

  return (
    <div className="App">
      { 
      loggedIn 
      ? <MainPage userDetails />
      : currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }

    </div>
  );
}

export default App;