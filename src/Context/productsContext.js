import { createContext, useContext, useReducer, useEffect } from "react";
import { toast } from "react-hot-toast";
import { addItemToCartHandler, addItemToWishlistHandler, getCategories, getProduct, removeItemFromCartHandler, removeItemFromWishlistHandler } from "../services/productsAPI";
import { useNavigate } from "react-router-dom";

const ProductContext = createContext();

const initialState = {
    products: [], 
    categories: [],
    cart: [],
    wishlist: [],
}

const ProductProvider = ({children}) =>{

    const navigate = useNavigate();
    const productReducerFun = (productState, action) => {
        switch(action.type){
            case "SET_PRODUCTS":
                return{
                    ...productState, 
                    products: action.payload,
                }
            
            case "SET_CATEGORIES":
                return{
                    ...productState,
                    categories: action.payload,
                }

            case "ADD_TO_CART":
                    return{
                        ...productState, 
                        cart: action.payload,
                }
    
            case "REMOVE_FROM_CART":
                return{
                        ...productState,
                        cart: action.payload,
                }
            
            case "INCREASE_QUANTITY":
                return {...productState,
                    cart: 
                        productState.cart.map((item) => item.id === action.payload.id ? 
                        {...item, quantity: item.quantity + 1} : item)
                }
            case "DECREASE_QUANTITY":
                return {...productState,
                    cart: 
                        productState.cart.map((item) => item.id === action.payload.id ? 
                        {...item, quantity: item.quantity > 1 ? item.quantity - 1: item.quantity} : item)
                }

            case "ADD_TO_WISHLIST":
                return{
                        ...productState,
                        wishlist: action.payload,
                }

            case "REMOVE_FROM_WISHLIST":
                    return{
                            ...productState,
                            wishlist: action.payload,
                    }
        }
    }
    const [ productState, productDispatch] = useReducer(productReducerFun, initialState);

    useEffect(() =>{
        const fetchAllProducts = async () =>{
            try{
                const response = await getProduct();
                productDispatch({type: "SET_PRODUCTS", payload: response.products});
            }catch(error){
                console.log(error);
            }
        }
        fetchAllProducts();
    },[]);

    useEffect(() =>{
        const fetchAllCategories = async () =>{
            try{
                const response = await getCategories();
                productDispatch({type: "SET_CATEGORIES", payload: response.categories});
            }catch(error){
                console.log(error);
            }
        }
        fetchAllCategories();
    },[]);

    const addItemToCart = async (token,product) =>{
        console.log(token);
        if(token){
            try{
                console.log("entered like page");
                const response = await addItemToCartHandler(token,product);
                productDispatch({type: "ADD_TO_CART", payload: response.cart})
                toast.success("Product added to cart");
            }catch(error){
                toast.error("Product cannot add to cart");
                console.log(error);
            }
        }else{
            toast.error("Login First!");
            navigate("/login");
        }
    }

    const removeItemFromCart = async(_id, token) =>{
        try{
            const response = await removeItemFromCartHandler(_id, token);
            productDispatch({type: "REMOVE_FROM_CART", payload: response.cart})
            toast.success("Product removed from cart")
        }catch(error){
            toast.error("Product cannot remove from cart");
            console.log(error);
        }
    }

    const addItemToWishlist = async (token,product) =>{
        if(token){
            try{
                console.log("entered like page");
                const response = await addItemToWishlistHandler(token,product);
                productDispatch({type: "ADD_TO_WISHLIST", payload: response.wishlist})
                toast.success("Product added to wishlist");
            }catch(error){
                toast.error("Product cannot add to wishlist");
                console.log(error);
            }
        }else{
            toast.error("Login First!");
            navigate("/login");
        }
    }

    const removeItemFromWishlist = async(_id, token) =>{
        try{
            const response = await removeItemFromWishlistHandler(_id, token);
            productDispatch({type: "REMOVE_FROM_WISHLIST", payload: response.wishlist})
            toast.success("Product removed from wishlist")
        }catch(error){
            toast.error("Product cannot remove from wishlist");
            console.log(error);
        }
    }

    return<ProductContext.Provider value={{productState, productDispatch, addItemToCart, removeItemFromCart, addItemToWishlist, removeItemFromWishlist}}>{children}</ProductContext.Provider>
}

const useProduct = () => useContext(ProductContext);

export { useProduct, ProductProvider};