import "../../public-css/navbar.css";
import "../../public-css/root.css";
import "./homepage.css";
import { Link } from "react-router-dom";
import { useFilter } from "../../Context/filterContext";
import { Navbar } from "../Navbar/navbar";
import { Footer } from "../Footer/footer";
import { useProduct } from "../../Context/productsContext";

const Homepage = () => {
const { filterDispatch } = useFilter();
const {productState } = useProduct();

return (
<div className="App">
    <Navbar />
    <div class="body-container">
        <div class="hero-image">
        <div className="img-cont">
            <img src="./images/grand-slam.svg" alt="sport" class="home-img" />
            </div>
            <div className="img-cont">
            <img src="./images/basketball.svg" alt="sport" class="home-img" />
            </div>
            <div className="img-cont">
            <img src="./images/goal.svg" alt="sport" class="home-img" />
            </div>
        </div>
        <div class="sports-flex justify-align">
            <Link to="/products">
            <div className="img-category">
                <img src="../images/all-products.jpg" alt="Cricket" className="box" />
                <Link to="/products">
                <button className="btn-info-outline btn btn-text products-btn-color">ALL PRODUCTS</button>
                </Link>
            </div>
            </Link>
            {productState.categories.map(item =>
            <div class="img-category">
                <img src={item.imgSrc} alt="Cricket" class="sport-img" />
                <Link to="/products">
                <button class="btn-info btn btn-text" onClick={()=> filterDispatch({type: "CATEGORIES", payload:
                    item.categoryName})}>{item.categoryName}</button>
                </Link>
            </div>)}
        </div>
    </div>
    <Footer />
</div>
);
};

export { Homepage };