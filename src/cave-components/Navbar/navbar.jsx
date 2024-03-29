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
        <nav class="nav-header">
            <Link to="/">
            <div class="left-nav">SPORTS CAVE
            </div>
            </Link>
            <div class="right-navbar">
                <Link to="/wishlist">
                <div class="badge-item">
                    <button class="btn btn-only-icon no-margin nav-icon">
                        <i class="far fa-heart"></i></button>
                    <div class="badge red-circle">{productState.wishlist.length}</div>
                </div>
                </Link>
                <Link to="/cart">
                <div class="badge-item">
                    <button class="btn btn-only-icon no-margin nav-icon">
                        <i class="far fa-shopping-cart"></i></button>
                    <div class="badge red-circle">{productState.cart.length}</div>
                </div>
                </Link>
                {token ? <button class="btn btn-only-icon no-margin nav-icon" onClick={()=> logoutHandler()}>
                    <i class="far fa-sign-out-alt"></i></button> :
                <Link to="/login">
                <button className="btn btn-only-icon no-margin nav-icon"><i class="far fa-sign-in-alt"></i></button>
                </Link>
                }
                {theme === "light" ? (
                <button class="btn btn-only-icon no-margin nav-icon" onClick={()=> setTheme("dark")}><i
                        class="far fa-lightbulb-on"></i></button>
                ) : (
                <button class="btn btn-only-icon no-margin nav-icon" onClick={()=> setTheme("light")}><i
                        class="far fa-lightbulb-slash"></i></button>
                )}
            </div>
        </nav>
     </div>
</div>
);
};

export { Navbar };