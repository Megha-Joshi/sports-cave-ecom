import "./products.css";
import "../../public-css/product-wishlist.css"
import "../../public-css/navbar.css";
import "../../public-css/root.css";

const Products = () => {
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
    <div class="page-container">
        <aside class="filter">
            <div class="filter-head">
                <h3 class="filter-heading">Filters</h3>
                <button class="btn btn-no-bg btn-text">CLEAR ALL</button>
            </div>
            <div>
                <h4 class="filter-heading">Price</h4>
                <div class="range-category">
                    <span class="sm-text range-number">300</span>
                    <span class="sm-text range-number">700</span>
                    <span class="sm-text range-number">1200</span>
                </div>
                <input type="range" class="price-range" min="300" max="1200" />
            </div>
            <div>
                <h4 class="filter-heading">Category</h4>
                <label for="cricket" class="disp-new-line sm-text">
                    <input type="checkbox" id="cricket" name="cricket" value="Cricket" />
                    Cricket
                </label>
                <label for="football" class="disp-new-line sm-text">
                    <input type="checkbox" id="football" name="football" value="Football" />
                    Football
                </label>
                <label for="hockey" class="disp-new-line sm-text">
                    <input type="checkbox" id="hockey" name="hockey" value="Football" />
                    Hockey
                </label>
                <label for="badminton" class="disp-new-line sm-text">
                    <input type="checkbox" id="badminton" name="badminton" value="Badminton" />
                    Badminton
                </label>
                <label for="basketball" class="disp-new-line sm-text">
                    <input type="checkbox" id="basketball" name="basketball" value="Basketball" />
                    Basketball
                </label>
                <label for="tennis" class="disp-new-line sm-text">
                    <input type="checkbox" id="tennis" name="tennis" value="Tennis" />
                    Tennis
                </label>
            </div>
            <div>
                <h4 class="filter-heading">Ratings</h4>
                <label for="1star" class="disp-new-line sm-text">
                    <input type="radio" id="1star" name="rating" value="1" />
                    1 star and above
                </label>
                <label for="2star" class="disp-new-line sm-text">
                    <input type="radio" id="2star" name="rating" value="2" />
                    2 star and above
                </label>
                <label for="3star" class="disp-new-line sm-text">
                    <input type="radio" id="3star" name="rating" value="3" />
                    3 star and above
                </label>
                <label for="4star" class="disp-new-line sm-text">
                    <input type="radio" id="4star" name="rating" value="4" />
                    4 star and above
                </label>
            </div>
            <div>
                <h4 class="filter-heading">Sort by</h4>
                <label for="l-to-h" class="disp-new-line sm-text">
                    <input type="radio" id="l-to-h" name="sorting" value="low" />
                    Price : Low to High
                </label>
                <label for="h-to-l" class="disp-new-line sm-text">
                    <input type="radio" id="h-to-l" name="sorting" value="high" />
                    Price : High to Low
                </label>
            </div>
        </aside>
        <div class="product-container">
            <h1 class="title">Showing All Products</h1>
            <div class="product-card-container">
                <div class="card-container">
                    <article class="card">
                        <div class="card-body">
                            <img src="../images/shin_guards.jpg" alt="Card Image" class="card-img" />
                            <div>
                                <h3 class="card-head">RDX Black Shine Guard</h3>
                                <p class="card-text">₹1,899</p>
                            </div>
                        </div>
                        <div class="card-footer">
                            <button class="btn btn-text btn-info"><a href="./cart.html" class="solid-btn-color">Add to Cart</a></button>
                            <button class="btn btn-text btn-info-outline"><a href="./wishlist.html" class="outline-btn-color">Wishlist</a></button>
                        </div>
                    </article>
                </div>
                <div class="card-container">
                    <article class="card">
                        <div class="card-body">
                            <img src="../images/ipl-jersey.jpg" alt="Card Image" class="card-img" />
                            <div>
                                <h3 class="card-head">RCB Jersey</h3>
                                <p class="card-text">₹1,200</p>
                            </div>
                        </div>
                        <div class="card-footer">
                            <button class="btn btn-text btn-info"><a href="./cart.html" class="solid-btn-color">Add to Cart</a></button>
                            <button class="btn btn-text btn-info-outline"><a href="./wishlist.html" class="outline-btn-color">Wishlist</a></button>
                        </div>
                    </article>
                </div>
                <div class="card-container">
                    <article class="card">
                        <div class="card-body">
                            <img src="../images/backboards_basketball.jpg" alt="Card Image" class="card-img" />
                            <div>
                                <h3 class="card-head">Basketball Backboard</h3>
                                <p class="card-text">₹410</p>
                            </div>
                        </div>
                        <div class="card-footer">
                            <button class="btn btn-text btn-info"><a href="./cart.html" class="solid-btn-color">Add to Cart</a></button>
                            <button class="btn btn-text btn-info-outline"><a href="./wishlist.html" class="outline-btn-color">Wishlist</a></button>
                        </div>
                    </article>
                </div>
                <div class="card-container">
                    <article class="card">
                        <div class="card-body">
                            <img src="../images/tennis_racquet.jpg" alt="Card Image" class="card-img" />
                            <div>
                                <h3 class="card-head">Tennis Racquet with balls</h3>
                                <p class="card-text">₹999</p>
                            </div>
                        </div>
                        <div class="card-footer">
                            <button class="btn btn-text btn-info"><a href="./cart.html" class="solid-btn-color">Add to Cart</a></button>
                            <button class="btn btn-text btn-info-outline"><a href="./wishlist.html" class="outline-btn-color">Wishlist</a></button>
                        </div>
                    </article>
                </div>
                <div class="card-container">
                    <article class="card">
                        <div class="card-body">
                            <img src="../images/cricket_bats.jpg" alt="Card Image" class="card-img" />
                            <div>
                                <h3 class="card-head">Willow Cricket Bat</h3>
                                <p class="card-text">₹1,499</p>
                            </div>
                        </div>
                        <div class="card-footer">
                            <button class="btn btn-text btn-info"><a href="./cart.html" class="solid-btn-color">Add to Cart</a></button>
                            <button class="btn btn-text btn-info-outline"><a href="./wishlist.html" class="outline-btn-color">Wishlist</a></button>
                        </div>
                    </article>
                </div>
                <div class="card-container">
                    <article class="card">
                        <div class="card-body">
                            <img src="../images/badminton_racquet.jpg" alt="Card Image" class="card-img" />
                            <div>
                                <h3 class="card-head">Badminton Racquet</h3>
                                <p class="card-text">₹1,899</p>
                            </div>
                        </div>
                        <div class="card-footer">
                            <button class="btn btn-text btn-info"><a href="./cart.html" class="solid-btn-color">Add to Cart</a></button>
                            <button class="btn btn-text btn-info-outline"><a href="./wishlist.html" class="outline-btn-color">Wishlist</a></button>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
};

export {Products};