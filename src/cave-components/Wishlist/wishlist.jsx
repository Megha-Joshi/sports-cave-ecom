import "./wishlist.css";
import "../../public-css/product-wishlist.css"
import "../../public-css/navbar.css";
import "../../public-css/root.css";

const WishList = () => {
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
                <button class="btn-secondary-outline btn btn-text no-margin btn-round"><a href="/index.html" class="login-color">Logout</a></button>
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
    <div class="wishlist-container justify-align">
        <h1 class="title">My Wishlist</h1>
        <div class="wishlist-card-container justify-align">
            <div class="card-container">
                <article class="card">
                    <div class="card-body">
                        <img src="../images/cricket_bats.jpg" alt="Card Image" class="card-img" />
                        <div class="written">
                            <h3 class="card-head">Willow Cricket Bat</h3>
                            <p class="card-text">₹1,449</p>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-text btn-info"><a href="./cart.html" class="solid-btn-color">Move to Cart</a></button>
                        <button class="btn btn-no-bg btn-text">Remove <i class="fas fa-heart wish-icon"></i></button>
                    </div>
                </article>
            </div>
            <div class="card-container">
                <article class="card">
                    <div class="card-body">
                        <img src="../images/ipl-jersey.jpg" alt="Card Image" class="card-img" />
                        <div class="written">
                            <h3 class="card-head">RCB Jersey</h3>
                            <p class="card-text">₹1,200</p>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-text btn-info"><a href="./cart.html" class="solid-btn-color">Move to Cart</a></button>
                        <div>
                            <button class="btn btn-no-bg btn-text">Remove <i class="fas fa-heart wish-icon"></i></button>
                    </div>
                    </div>
                </article>
            </div>
            <div class="card-container">
                <article class="card">
                    <div class="card-body">
                        <img src="../images/backboards_basketball.jpg" alt="Card Image" class="card-img" />
                        <div class="written">
                            <h3 class="card-head">Basketball Backboard</h3>
                            <p class="card-text">₹410</p>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-text btn-info"><a href="./cart.html" class="solid-btn-color">Move to Cart</a></button>
                        <button class="btn btn-no-bg btn-text">Remove <i class="fas fa-heart wish-icon"></i></button>
                    </div>
                </article>
            </div>
            <div class="card-container">
                <article class="card">
                    <div class="card-body">
                        <img src="../images/tennis_racquet.jpg" alt="Card Image" class="card-img" />
                        <div class="written">
                            <h3 class="card-head">Racquet with balls</h3>
                            <p class="card-text">₹999</p>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-text btn-info"><a href="./cart.h/cart.html" class="solid-btn-color"></a>Move to Cart</button>
                        <button class="btn btn-no-bg btn-text">Remove <i class="fas fa-heart wish-icon"></i></button>
                    </div>
                </article>
            </div>
        </div>
    </div>
    </div>
  );
};

export {WishList};