import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import InputUppercase from './components/InputUppercase';

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = 'black';
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
    }
      
  }
  return (
    // <BrowserRouter>
    //   <Navbar title="TextLogo" mode={mode} toggleMode={toggleMode}/>
    //   <Routes>
    //     <Route path='/' element={<InputUppercase mode={mode}/>}></Route>
    //   </Routes>
    // </BrowserRouter>
    <h1>aryan</h1>
  );
}

export default App;
