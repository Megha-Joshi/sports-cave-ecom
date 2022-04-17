import "../../public-css/navbar.css";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/cartContext";
import { useWishlist } from "../../Context/wishlistContext";

const Navbar = () =>{

const { wishState } = useWishlist();
const { cartState } = useCart();

return (
<div className="App">
    <div className="container">
        <nav className="nav-header justify-align">
            <Link to="/">
            <div className="left-nav">SPORTS CAVE
            </div>
            </Link>
            <div>
                <input type="text" placeholder="Search" name="search" className="search-box" />
            </div>
            <div className="right-navbar">
                <Link to="/login">
                <button className="btn-secondary-outline btn-text no-margin btn-login">Login</button>
                </Link>
                <Link to="/wishlist">
                <div className="badge-item">
                    <button className="btn btn-only-icon no-margin">
                        <i className="far fa-heart fa-2x"></i></button>
                    <div className="badge red-circle">{wishState.wishlist.length}</div>
                </div>
                </Link>
                <Link to="/cart">
                <div className="badge-item">
                    <button className="btn btn-only-icon no-margin">
                        <i className="far fa-shopping-cart fa-2x"></i></button>
                    <div className="badge red-circle">{cartState.cart.length}</div>
                </div>
                </Link>
            </div>
        </nav>
    </div>
</div>
);
};

export { Navbar };