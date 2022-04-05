import "./cart.css";
import "../../public-css/navbar.css";
import "../../public-css/root.css";

const Cart = () => {
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
    <h1 class="title cart-title">My Cart<span>(2)</span></h1>
    <div class="cart-container">
        <div class="cart-card-container justify-align">
            <article class="card hz-card">
                <div class="horizontal-flex">
                    <img src="../images/cricket_bats.jpg" alt="Card Image" class="cart-card-img" />
                    <div class="card-content justify-align">
                        <p class="card-text">Willow Cricket Bat</p>
                        <h3 class="card-head">₹1,304.1 <span class="sm-text discount">₹1,449</span></h3>
                        <p class="card-text sm-text discount-item">10% OFF</p>
                        <div class="quantity">
                            <p class="sm-text">Quantity : </p>
                            <button><i class="fal fa-plus qnt-change"></i></button>
                            <div class="count qnt-product">1</div>
                            <button><i class="fal fa-minus qnt-change"></i></button>
                        </div>
                        <div class="cart-card-footer">
                            <button class="btn btn-text btn-info">Remove From Cart</button>
                            <button class="btn btn-text btn-info-outline"><a href="./wishlist.html" class="outline-btn-color">Move to Wishlist</a></button>
                        </div>
                    </div>
                </div>
            </article>
            <article class="card hz-card">
                <div class="horizontal-flex">
                    <img src="../images/ipl-jersey.jpg" alt="Card Image" class="cart-card-img" />
                    <div class="card-content justify-align">
                        <p class="card-text">RCB Jersey</p>
                        <h3 class="card-head">₹1,080 <span class="sm-text discount">₹1,200</span></h3>
                        <p class="card-text sm-text discount-item">10% OFF</p>
                        <div class="quantity">
                            <p class="sm-text">Quantity : </p>
                            <button><i class="fal fa-plus qnt-change"></i></button>
                            <div class="count qnt-product">1</div>
                            <button><i class="fal fa-minus qnt-change"></i></button>
                        </div>
                        <div class="cart-card-footer">
                            <button class="btn btn-text btn-info">Remove From Cart</button>
                            <button class="btn btn-text btn-info-outline"><a href="./wishlist.html" class="outline-btn-color">Move to Wishlist</a></button>
                        </div>
                    </div>
                </div>
            </article>

        </div>
        <div class="cart-bill-container">
            <h3>PRICE DETAILS</h3>
            <div class="line w-800"></div>
            <div class="bill-items">
                <p>Price (2 items)</p>
                <p>₹2,649</p>
            </div>
            <div class="bill-items">
                <p>Discount</p>
                <p>-₹264.9</p>
            </div>
            <div class="bill-items">
                <p>Delievery Charges</p>
                <p>₹200</p>
            </div>
            <div class="line w-800"></div>
            <div class="bill-items">
                <h3>TOTAL AMOUNT</h3>
                <p>₹2,584.1</p>
            </div>
            <div class="line w-800"></div>
            <p>You will save ₹65 on this order.</p>
            <button class="btn btn-text btn-primary">PLACE ORDER</button>
        </div>
    </div>
    </div>
  );
}; 

export {Cart};