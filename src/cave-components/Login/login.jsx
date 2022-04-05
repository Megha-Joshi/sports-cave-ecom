import "../../public-css/signup-login.css"
import "./login.css";
import "../../public-css/navbar.css";
import "../../public-css/root.css";

const Login = () => {
  return (
    <div className="App">
      <div class="container">
        <nav class="header justify-align">
            <div class="left-nav">
                <a href="/index.html">SPORTS CAVE</a>
            </div>
            <div>
                <input type="text" placeholder="Search" name="search" class="search-box" />
            </div>
            <div class="right-nav">
                <button class="btn-secondary-outline btn btn-text no-margin btn-round"><a href="./login.html" class="login-color">Login</a></button>
                <div class="badge-item">
                    <button class="btn btn-only-icon no-margin">
                        <a href="./wishlist.html" class="items-color"><i class="far fa-heart fa-2x"></i></a></button>
                    <div class="badge red-circle">9</div>
                </div>
                <div class="badge-item">
                    <button class="btn btn-only-icon no-margin">
                        <a href="./cart.html" class="items-color"><i class="far fa-shopping-cart fa-2x"></i></a></button>
                    <div class="badge red-circle">7</div>
                </div>
            </div>
        </nav>
    </div>
    <div class="login-container justify-align">
        <form class="container form-container">
            <h2 class="login-head">Login</h2>
            <label for="username" class="input-text">Email address</label><br/>
            <input type="text" id="username" name="username" placeholder="abc@gmail.com" class="input-box title-content"
                required /><br/>
            <label for="password" class="input-text">Password</label><br/>
            <input type="password" id="password" name="password" placeholder="**********"
                class="input-box title-content" required />
            <div class="check-pass">
                <label for="checkbox">
                    <input type="checkbox" id="checkbox" name="checkbox" />
                    Remember me</label>
                <button class="btn-no-bg">Forgot your Password?</button>
            </div>
            <div>
                <button class="btn-info btn btn-text long-btn">Login</button>
            </div>
            <div class="new-ac">
            <btn class="btn-no-bg"><a href="./signup.html" class="btn-no-bg-color">Create New Account</a></btn>
        </div>
        </form>
    </div>
    </div>
  );
};

export {Login};