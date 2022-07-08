import "../../public-css/root.css";
import "../../public-css/signup-login.css"
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/authContext";
import { useState } from "react";

const Signup = () => {
const { signupHandler } = useAuth();
const [userDetails, setUserDetails ] = useState({name: "", email: "", password: ""});

const signupFormHandler = (e) => {
e.preventDefault();
signupHandler(userDetails);
}
return(
<div class="login-container justify-align">
    <form class="form-container" onSubmit={signupFormHandler}>
        <h2 class="login-head">Signup</h2>
        <fieldset>
            <legend for="username" class="inp-txt">Name</legend>
            <input type="text" id="username" name="username" placeholder="Aadarsh Balika"
                class="inputt-box title-content" value={userDetails.name} onChange={(e)=>
            setUserDetails({...userDetails, name: e.target.value})} required /><br />
        </fieldset>
        <fieldset>
            <legend for="username" class="inp-txt">Email</legend>
            <input type="text" id="email" name="email" placeholder="abc@gmail.com" class="inputt-box title-content"
                value={userDetails.email} onChange={(e)=> setUserDetails({...userDetails, email: e.target.value})}
            required /><br />
        </fieldset>
        <fieldset>
            <legend for="password" class="inp-txt">Password</legend>
            <input type="password" id="password" name="password" placeholder="**********"
                class="inputt-box title-content" value={userDetails.password} onChange={(e)=>
            setUserDetails({...userDetails, password: e.target.value})} required />
        </fieldset>
        <label for="checkbox" className="inp-txt">
            <input type="checkbox" id="checkbox" name="checkbox" className="sign-check" /> I accept all Terms and
            Conditions</label>
        <div>
            <button type="submit" className="btn-info btn btn-text long-btn">Create new Account</button>
        </div>
        <Link to="/login">
        <div class="new-ac">
            <button class="text-btn">Already have an Account</button>
        </div>
        </Link>
    </form>
</div>
)
}

export { Signup };