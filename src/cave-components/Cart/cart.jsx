import "./cart.css";
import "../../public-css/navbar.css";
import "../../public-css/root.css";
import { Link } from "react-router-dom";
import { Navbar } from "../Navbar/navbar";
import { useProduct } from "../../Context/productsContext";
import { useAuth } from "../../Context/authContext";

const Cart = () => {

const { token } = useAuth();
const { productState, productDispatch, removeItemFromCart, removeItemFromWishlist, addItemToWishlist } = useProduct();
const initialPrice = productState.cart.reduce((acc, item) => acc + Number(item.price) * Number(item.quantity),0);
const discountPrice = (10*initialPrice)/100;
const totalPrice = initialPrice-discountPrice;

const wishlistHandler = (token, item) =>{
    productState.wishlist.find((wishItem) => wishItem._id === item._id) ?
    removeItemFromWishlist(item._id, token) :
    addItemToWishlist(token, item);
}

return (
<div className="App">
    < Navbar />
    <h1 class="title cart-title">My Cart <span>({productState.cart.length})</span></h1>
    <div class="cart-container">
        <div class="cart-card-container justify-align">
            {productState.cart.map((item) =>
            <div class="card-ecom">
            <article class="card image-overlay">
                <div class="card-body">
                    <img src={item.imgSrc} alt="Card Image" class="card-img" />
                    <span className="like-btn" onClick={() => wishlistHandler(token ,item)}><i className = { productState.wishlist.find((wishItem) => wishItem._id === item._id) ? "fas fa-heart red-like": "far fa-heart red-like"}></i></span>
                    <div className="cart-card-rating">
                        <div>{item.rating}</div>
                        <span><i class="fad fa-star filled"></i></span>
                    </div>
                    <div class="written">
                    <h3 class="card-head">{item.title}</h3>
                            <p class="card-text">₹ {item.price}</p>
                    <div class="quantity">
                        <p class="sm-text">Quantity : </p>
                        <button><i class="fal fa-plus qnt-change" onClick={()=> productDispatch({type:
                                "INCREASE_QUANTITY", payload: item})}></i></button>
                        <div class="count qnt-product">{item.quantity}</div>
                        <button><i class="fal fa-minus qnt-change" onClick={()=> productDispatch({ type:
                                "DECREASE_QUANTITY", payload: item})}></i></button>
                    </div>
                    </div>
                </div>
                <div class="card-footer">
                <button class="btn btn-text btn-info" onClick={()=> removeItemFromCart(item._id, token)}>Remove From Cart</button>
                </div>
            </article>
        </div>)}
        </div>
        <div class="cart-bill-container">
            <h3>PRICE DETAILS</h3>
            <div class="line w-800"></div>
            <div class="bill-items">
                <p>Price (2 items)</p>
                <p>₹ {initialPrice}</p>
            </div>
            <div class="bill-items">
                <p>10% Discount</p>
                <p>₹ {discountPrice}</p>
            </div>
            <div class="line w-800"></div>
            <div class="bill-items">
                <h3>TOTAL AMOUNT</h3>
                <p>₹ {totalPrice}</p>
            </div>
            <div class="line w-800"></div>
            <p>You will save ₹ {discountPrice} on this order.</p>
            <Link to="/">
            <button class="btn btn-text btn-primary">PLACE ORDER</button>
            </Link>
        </div>
    </div>
</div>
);
};

export {Cart};