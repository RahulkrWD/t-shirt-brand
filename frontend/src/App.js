import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Forgetpassword from "./pages/auth/ForgetPassword";
import Popup from "./components/Popup";
import PageNotFound from "./components/PageNotFound";
import Profile from "./pages/my-profile/Profile";
import MyOrder from "./pages/my-order/MyOrder";
import Cart from "./pages/cart/Cart";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Popup />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<Forgetpassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/My-order" element={<MyOrder />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <ScrollToTop />
    </>
  );
}

export default App;
