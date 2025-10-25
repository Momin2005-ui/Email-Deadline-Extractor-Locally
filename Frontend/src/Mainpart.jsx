import GenerateSchedulebar from "./GenerateSchedulebar";
import Login from "./Login";
import SideBar from "./Sidebar";
import React from "react";

function Mainpart({showLogin, handleCloseLogin}) {
   

    return (
        <>
          <div>
            
            <div style={{display:"inline-flex",position:"relative"}}>
            <div className="sidebar">
                {<SideBar />}
            </div>


            <div className="generateschedulebar">
                {<GenerateSchedulebar/>}
            </div>
          </div>

          {showLogin? <div style={{position:"fixed",top:"180px",left:"489px"}}>
            <Login handleClose={handleCloseLogin} />
          </div> : null}

          </div>
        </>
    );


}

export default Mainpart;