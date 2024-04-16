import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  // whether dark mode is enabled or not  
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null); // alert object

  //11111

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  //11111

  //11112
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = 'rgb(71 79 136)'
      showAlert("Dark mode has been enabled", "success")

      // •••Flashing title : reduce user experience (don't do it)
      // setInterval(() => {
      //   document.title = "Textutil is amazing"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install Textutil now"
      // }, 1300);
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }
  //11112

  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar /> */}

      <Alert alert={alert} />

      <div className="container my-3">
        {/* <Routes> */}
        {/* exact -> to avoid partial routing */}
        {/* <Route exact path="/about" element={<About />} /> */}
        {/* <Route exact path="/" element= */}
        {<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}
        {/* /> */}
        {/* </Routes> */}
      </div>
      {/* </BrowserRouter > */}
    </>
  );
}

export default App;
