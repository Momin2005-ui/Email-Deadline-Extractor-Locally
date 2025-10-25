import GenerateSchedulebar from './GenerateSchedulebar.jsx';
import Header from './Header.jsx';
import Login from './Login.jsx';
import Mainpart from "./Mainpart.jsx";
import React from 'react';

function App()
{
    const [showLogin, setShowLogin] = React.useState(false);

   const handleLoginClick = () => {
       setShowLogin(true);
   };

   const handleCloseLogin = () => {
       setShowLogin(false);
   };




  return(
    <>
    <Header handleLoginClick={handleLoginClick} />
    <Mainpart showLogin={showLogin} handleCloseLogin={handleCloseLogin} />

    </>
  )
}

export default App