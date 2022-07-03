import axios from "axios";
import { useAuth } from "../Context/authContext";

const getProduct = async () => {
    try {
        const response = await axios({
            method: "GET",
            url: "/api/products"
        });

        if (response.status === 200)
            return response.data;
    } catch (error) {
        console.error(error.response);
    }
}

const getCategories = async () =>{
    try {
        const response = await axios({
            method: "GET",
            url: "/api/categories"
        });
    
        if (response.status === 200) {
            return response.data;}
      } catch (error) {
        console.error(error.response);
      } 
}

const getCartItemsHandler = async () =>{
    const { token } = useAuth();
    try{
        const response = await axios({
            method: "GET",
            url: "/api/user/cart",
            headers: {
                authorization : token
            },
        });

        if(response.status === 200)
            return response.data;
    }catch(error) {
        console.error(error.response);
    }
}

const addItemToCartHandler = async (token,product) => {
    try{
        const response = await axios({
            method: "POST",
            url: "/api/user/cart",
            data: {product},
            headers: {
                authorization : token
            },
        });

        if(response.status === 200 || response.status === 201)
            return response.data;
    }catch(error){
        console.error(error.response);
    }
}

const removeItemFromCartHandler = async (_id ,token) => {
    try{
        const response = await axios({
            method: "DELETE",
            url: `/api/user/cart/${_id}`,
            headers:{
                authorization: token
            },
        });

        if(response.status === 200)
            return response.data;
    }catch(error){
        console.error(error.response);
    }
}

const getWishlistItemsHandler = async () =>{
    const { token } = useAuth();
    try{
        const response = await axios({
            method: "GET",
            url: "/api/user/wishlist",
            headers: {
                authorization : token
            },
        });

        if(response.status === 200)
            return response.data;
    }catch(error) {
        console.error(error.response);
    }
}

const addItemToWishlistHandler = async (token,product) => {
    try{
        const response = await axios({
            method: "POST",
            url: "/api/user/wishlist",
            data: {product},
            headers: {
                authorization : token
            },
        });

        if(response.status === 200 || response.status === 201)
            return response.data;
    }catch(error){
        console.error(error.response);
    }
}

const removeItemFromWishlistHandler = async (_id ,token) => {
    try{
        const response = await axios({
            method: "DELETE",
            url: `/api/user/wishlist/${_id}`,
            headers:{
                authorization: token
            },
        });

        if(response.status === 200)
            return response.data;
    }catch(error){
        console.error(error.response);
    }
}

export {getProduct, getCategories, getCartItemsHandler, addItemToCartHandler, removeItemFromCartHandler, getWishlistItemsHandler, addItemToWishlistHandler, removeItemFromWishlistHandler };