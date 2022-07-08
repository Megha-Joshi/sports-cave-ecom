import "../../public-css/root.css";
import "../../public-css/product-wishlist.css"
import "./wishlist.css";
import "../../public-css/root.css";
import { Navbar } from "../Navbar/navbar";
import { useProduct } from "../../Context/productsContext";
import { useAuth } from "../../Context/authContext";

const WishList = () => {
const { token } = useAuth();
const { productState, removeItemFromWishlist, addItemToCart } = useProduct();
const { cart } = productState;

const wishlistHandler = (token, item) =>{
    productState.wishlist.find((wishItem) => wishItem._id === item._id) ?
    removeItemFromWishlist(item._id, token) :
    addItemToWishlist(token, item);
}
return (
<div className="App">
    <Navbar />
    <div class="wishlist-container justify-align">
        <h1 class="title">My Wishlist</h1>
        <div class="wishlist-card-container justify-align">
            {productState.wishlist.map((item) =>
            <div class="card-ecom">
                <article class="card image-overlay">
                    <div class="card-body">
                        <img src={item.imgSrc} alt="Card Image" class="card-img" />
                        <span className="like-btn" onClick={() => wishlistHandler(token ,item)}><i className = { productState.wishlist.find((wishItem) => wishItem._id === item._id) ? "fas fa-heart red-like": "far fa-heart red-like"}></i></span>
                        <div className="card-rating">
                            <div>{item.rating}</div>
                            <span><i class="fad fa-star filled"></i></span>
                        </div>
                        <div class="written">
                            <h3 class="card-head">{item.title}</h3>
                            <p class="card-text">₹ {item.price}</p>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-text btn-info" onClick={()=> addItemToCart(token, item)}>Move to Cart</button>
                    </div>
                </article>
            </div>)}
        </div>
    </div>
</div>
);
};

export {WishList};