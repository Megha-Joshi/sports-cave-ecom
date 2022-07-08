import "../../public-css/navbar.css";
import { Link } from "react-router-dom";
import { useProduct } from "../../Context/productsContext";
import { useAuth } from "../../Context/authContext";
import { useTheme } from "../../Context/themeContext";

const Navbar = () =>{

const { productState} = useProduct();
const { token, logoutHandler, loginHandler } = useAuth();
const {theme, setTheme } = useTheme();

return (
<div className="App">
    <div class="container">
        <nav class="nav-header justify-align">
            <Link to="/">
            <div class="left-nav">SPORTS CAVE
            </div>
            </Link>
            <div>
                <input type="text" placeholder="Search" name="search" class="search-box" />
            </div>
            <div class="right-navbar">
                <Link to="/wishlist">
                <div class="badge-item">
                    <button class="btn btn-only-icon no-margin">
                        <i class="far fa-heart fa-2x"></i></button>
                    <div class="badge red-circle">{productState.wishlist.length}</div>
                </div>
                </Link>
                <Link to="/cart">
                <div class="badge-item">
                    <button class="btn btn-only-icon no-margin">
                        <i class="far fa-shopping-cart fa-2x"></i></button>
                    <div class="badge red-circle">{productState.cart.length}</div>
                </div>
                </Link>
                {token ? <button class="btn btn-only-icon no-margin" onClick={()=> logoutHandler()}>
                    <i class="far fa-sign-out-alt fa-2x"></i></button> :
                <Link to="/login">
                <button className="btn btn-only-icon no-margin"><i class="far fa-sign-in-alt fa-2x"></i></button>
                </Link>
                }
                {theme === "light" ? (
                <button class="btn btn-only-icon no-margin" onClick={()=> setTheme("dark")}><i
                        class="far fa-lightbulb-on fa-2x"></i></button>
                ) : (
                <button class="btn btn-only-icon no-margin" onClick={()=> setTheme("light")}><i
                        class="far fa-lightbulb-slash fa-2x"></i></button>
                )}
            </div>
        </nav>
    </div>
</div>
);
};

export { Navbar };