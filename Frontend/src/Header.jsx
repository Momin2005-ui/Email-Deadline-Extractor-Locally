import "./App.css"
import Mainpart from "./Mainpart"

function Header({ showLogin, handleLoginClick })
{
    return(

       <>
       <div className="header">
        <div style={{display:"flex",justifyContent:"space-between"}}>
        
        <div >
        <img className="logo" src="./public/images/imap-logo.png" alt="logo" />
       </div>
       
       <button className="Login" onClick={handleLoginClick} >
        <h2 style={{margin: 0}}>Login</h2>
       </button>
       
       </div>

       {/* <hr style={{border:"5px solid red"}}></hr> */}
       </div>
       
       
       </>
    )
}

export default Header