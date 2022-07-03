import "../../public-css/root.css";
import "../../public-css/product-wishlist.css"
import "./products.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Filter } from "../Filter/filter";
import { useFilter } from "../../Context/filterContext";
import { Navbar } from "../Navbar/navbar";
import { useProduct } from "../../Context/productsContext";
import { useAuth } from "../../Context/authContext";

const Products = () => {

const { filterState, filterDispatch} = useFilter();
const { productState, addItemToCart, addItemToWishlist, removeItemFromWishlist} = useProduct();
const {token} = useAuth();
const { products } = productState;

useEffect(() => {
filterState.showData.length === 0 &&
filterDispatch({type : "SET_DATA", payload: products});
}, [products]);

const filterCategory = (showData, filterOnCategories) => {
if (filterOnCategories.length > 0) {
console.log(filterOnCategories);
return showData.filter((product) => {
console.log(product);
return filterOnCategories.includes(product.categoryName);
});
} else {
return showData;
}
};

const filterPrice = (showData, filterOnPrice) => {
if (filterOnPrice === "PRICE_LOW_TO_HIGH") {
return showData.sort(
(product1, product2) => product1.price - product2.price
);
} else if (filterOnPrice === "PRICE_HIGH_TO_LOW") {
return showData.sort(
(product1, product2) => product2.price - product1.price
);
} else {
return showData;
}
};

const filterPriceRange = (showData, filterOnPriceRange) => {
if (filterOnPriceRange !== null) {
return showData.filter(
(product) => product.price <= filterOnPriceRange ); } else { return showData; } }; const filterRating=(showData,
    filterOnRating)=> {
    if (filterOnRating != null) {
    return showData.filter((product) => product.rating >= filterOnRating);
    } else {
    return showData;
    }
    };

    const productFilter = (filterState) => {
    const sortByCategoryData = filterCategory(
    filterState.showData,
    filterState.categoryFilter
    );

    const sortByPriceData = filterPrice(
    sortByCategoryData,
    filterState.sortByFilter
    );

    const sortByRatingData = filterRating(sortByPriceData, filterState.ratingFilter);

    const sortByPriceRangeData = filterPriceRange(
    sortByRatingData,
    filterState.priceRangeFilter
    );
    return sortByPriceRangeData;
    };

    const wishlistHandler = (token, item) =>{
        productState.wishlist.find((wishItem) => wishItem._id === item._id) ?
        removeItemFromWishlist(item._id, token) :
        addItemToWishlist(token, item);
    }
    return (
    <div className="App">
        <Navbar />
        <div class="page-container">
            <Filter />
            <div class="product-container">
                <h1 class="title">Showing All Products</h1>
                <div class="product-card-container">
                    {productFilter(filterState).length > 0 &&
                    productFilter(filterState).map((item =>
                    <div class="card-ecom">
                        <article class="card image-overlay">
                            <div class="card-body">
                                <img src={item.imgSrc} alt="Card Image" class="card-img" />
                                <span className="like-btn" onClick={() => wishlistHandler(token ,item)}><i className = { productState.wishlist.find((wishItem) => wishItem._id === item._id) ? "fas fa-heart red-like": "far fa-heart red-like"}></i></span>
                                <div className="card-rating">
                                    <div>{item.rating}</div>
                                    <span><i class="fad fa-star filled"></i></span>
                                </div>
                                <div>
                                    <h3 class="card-head">{item.title}</h3>
                                    <p class="card-text">₹ {item.price}</p>
                                </div>
                            </div>
                            <div class="card-footer">
                                {productState.cart.find((cartItem) => cartItem._id===item._id) ?
                                <Link to="/cart">
                                <button class="btn btn-text btn-info">Go to Cart</button>
                                </Link> : <button class="btn btn-text btn-info" onClick={() => addItemToCart(token, item)}>Add to Cart</button>
                                }
                            </div>
                        </article>
                    </div>))}
                </div>
            </div>
        </div>
    </div>
    );
    };

    export {Products};