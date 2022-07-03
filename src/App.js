import "./App.css";
import logo from "./logo.png";
import { Homepage } from "./cave-components/Homepage/homepage";
import { Products } from "./cave-components/Products/products";
import { Cart } from "./cave-components/Cart/cart";
import { WishList } from "./cave-components/Wishlist/wishlist";
import { Signup } from "./cave-components/Signup/signup";
import { Login } from "./cave-components/Login/login"
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { PrivateRoute } from "./cave-components/privateRoute/privateRoute";
import { useTheme } from "./Context/themeContext";

function App() {
  const { theme } = useTheme();
  return (
    <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
      <Toaster />
      {/* Public Routes */}
      <Routes>
        <Route path="/" element = {<Homepage />}/>
        <Route path="/products" element = {<Products />}/>
        <Route path="/login" element = {<Login />}/>
        <Route path="/signup" element = {<Signup />}/>
        <Route path="/cart" element = {<Cart />}/>
        <Route path="/wishlist" element = {<WishList />}/>

        {/* Public Routes */}
        <Route element={<PrivateRoute />}>
        <Route path="/cart" element = {<Cart />}/>
        <Route path="/wishlist" element = {<WishList />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

