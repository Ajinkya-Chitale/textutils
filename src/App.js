/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      showAlertMsg('success','Dark Mode is enabled');
      document.body.style.backgroundColor = "#0b6174";
    }
    else {
      setMode('light');
      showAlertMsg('success','Light Mode is enabled');
      document.body.style.backgroundColor = "white";
    }
  }

  const showAlertMsg = (type, message) => {
    setAlert({
      type: type,
      msg: message
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} mode={mode} />
        <Routes>
          <Route exact path="/" element={<TextArea heading="Enter text to analyze" mode={mode} showAlertMsg={showAlertMsg} />} />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;