import Mainpart from "./Mainpart";
import React from "react";

function Login({ handleClose }) {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    return(
        <div className="loginportal">
            <div>
                <button onClick={handleClose}>X</button>
            </div>

            <div >
                <div >
                    <div>
                         <h3>Username</h3>
                    </div>

                    <div >
                        <input type="text" placeholder="Enter your Username" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                </div>

                <div>
                    <div>
                            <h3>Email</h3>
                    </div>

                    <div>
                        <input type="email" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>

                <div>
                    <div>
                            <h3>Password</h3>
                    </div>

                    <div>
                        <input type="password" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;