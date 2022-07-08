import "../../public-css/root.css";
import "../../public-css/signup-login.css";
import { useAuth } from "../../Context/authContext.js";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
const { loginHandler } = useAuth();
console.log("hello login");
const [ userDetails, setUserDetails] = useState({email: "", password: ""});

const guestUserHandler = (event) => {
event.preventDefault();
setUserDetails({
email: "adarshbalika@gmail.com",
password: "adarshbalika",
})
}

function formHandler(e){
e.preventDefault();
loginHandler(userDetails);
}

return(
<div className="login-container justify-align">
    <form className="form-container" onSubmit={formHandler}>
        <h2 className="login-head">Login</h2>
        <fieldset>
            <legend for="username" className="inp-txt">Email</legend>
            <input type="text" id="username" name="username" placeholder="abc@gmail.com" className="inputt-box"
                value={userDetails.email} onChange={(e)=> setUserDetails({...userDetails, email: e.target.value})}
            required /><br />
        </fieldset>
        <fieldset>
            <legend for="password" className="inp-txt">Password</legend>
            <input type="password" id="password" name="password" placeholder="**********" className="inputt-box"
                value={userDetails.password} onChange={(e)=> setUserDetails({...userDetails, password: e.target.value})}
            required />
        </fieldset>
        <div className="check-pass">
            <label for="checkbox">
                <input type="checkbox" id="checkbox" name="checkbox" /> Remember me</label>
            <button className="text-btn">Forgot your Password?</button>
        </div>
        <div className="btn-cont">
            <button className="btn-info btn btn-text long-btn" onClick={guestUserHandler}>Add Guest Credentials</button>
            <button type="submit" className="btn-info btn btn-text long-btn">Login</button>
        </div>
        <Link to="/signup">
        <div className="new-ac">
            <button className="text-btn">Create New Account</button>
        </div>
        </Link>
    </form>
</div>
)
}

export { Login };