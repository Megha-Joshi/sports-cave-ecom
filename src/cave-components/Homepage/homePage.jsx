import "./homePage.css";
import "../../public-css/navbar.css";
import "../../public-css/root.css";

const Homepage = () => {
  return (
    <div className="App">
      <div class="container">
        <nav class="header justify-align">
            <div class="left-nav">
                <a href="./index.html">SPORTS CAVE</a>
            </div>
            <div>
                <input type="text" placeholder="Search" name="search" class="search-box" />
            </div>
            <div class="right-nav">
                <button class="btn-secondary-outline btn btn-text no-margin btn-round"><a
                        href="./Pages/login.html" class="login-color">Login</a></button>
                <div class="badge-item">
                    <button class="btn btn-only-icon no-margin">
                        <a href="./Pages/wishlist.html" class="items-color"><i class="far fa-heart fa-2x"></i></a></button>
                    <div class="badge red-circle">9</div>
                </div>
                <div class="badge-item">
                    <button class="btn btn-only-icon no-margin">
                        <a href="./Pages/cart.html" class="items-color"><i class="far fa-shopping-cart fa-2x"></i></a></button>
                    <div class="badge red-circle">7</div>
                </div>
            </div>
        </nav>
    </div>
    <div class="body-container">
        <div class="sports-flex justify-align">
            <div class="box">
                <h2 class="text-box"><a href="./Pages/product.html" class="btn-no-bg-color">ALL PRODUCTS</a></h2>
            </div>
            <div class="img-category">
                <img src="./images/cricket.jpg" alt="Cricket" class="sport-img" />
                <button class="btn-info btn btn-text">Cricket</button>
            </div>
            <div class="img-category">
                <img src="./images/football.jpg" alt="Football" class="sport-img" />
                <button class="btn-info btn btn-text">Football</button>
            </div>
            <div class="img-category">
                <img src="./images/hockey.jpg" alt="Hockey" class="sport-img" />
                <button class="btn-info btn btn-text">Hockey</button>
            </div>
            <div class="img-category">
                <img src="./images/badminton.jpg" alt="badminton" class="sport-img" />
                <button class="btn-info btn btn-text">Badminton</button>
            </div>
            <div class="img-category">
                <img src="./images/basketball.jpg" alt="basketball" class="sport-img" />
                <button class="btn-info btn btn-text">Basketball</button>
            </div>
            <div class="img-category">
                <img src="./images/tennis.jpg" alt="tennis" class="sport-img" />
                <button class="btn-info btn btn-text">Tennis</button>
            </div>
        </div>
        <div class="hero-image">
            <img src="./images/sport-latest.jpg" alt="sport" class="res-image" />
        </div>
        <div class="cards-category justify-align">
            <article class="card hz-card justify-align">
                <div class="card-body horizontal-flex">
                    <img src="./images/helmet.jpg" alt="Card Image" class="hz-image" />
                    <div>
                        <p class="card-text">NEW ARRIVALS</p>
                        <h3 class="card-head">NEW HELMETS</h3>
                        <p class="card-text">Check out our best helmet collection in this WORLD-CUP season.</p>
                        <button class="btn btn-info btn-text">EXPLORE</button>
                    </div>
                </div>
            </article>
            <article class="card hz-card">
                <div class="card-body horizontal-flex">
                    <img src="./images/shoes.jpg" alt="Card Image" class="hz-image" />
                    <div>
                        <p class="card-text">NEW ARRIVALS</p>
                        <h3 class="card-head">NEW SHOES</h3>
                        <p class="card-text">Check out our best shoes collection in this rainy season.</p>
                        <h4 class="card-head">BUY THE BEST SHOES!!</h4>
                        <button class="btn btn-info btn-text">EXPLORE</button>
                    </div>
                </div>
            </article>
        </div>
    </div>
    </div>
  );
};

export {Homepage};
