import React, { useState } from "react";
import Layout from "../../components/Layout";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLogin from "./GoogleLogin";
import styles from "./styles/auth.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handlelogin(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/auth/login`,
        {
          email,
          password,
        }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        const user = response.data;
        const userJson = JSON.stringify(user);
        localStorage.setItem("auth", userJson);
        navigate("/homepage");
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  }
  return (
    <Layout title={"login e-commerce"}>
      <div className={`${styles.loginPage}`}>
        <center>
          <form onSubmit={handlelogin}>
            <div className={styles.textField}>
              <h3 className={styles.title}>Login</h3>
              <input
                className={`w-100  mt-3 ${styles.input_type}`}
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <input
                className={`w-100  mt-3 ${styles.input_type}`}
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <button
                type="submit"
                className="btn btn-primary w-100 p-2 mt-3 mb-2 fw-bold"
              >
                Login
              </button>
              <Link to={"/forget-password"} className=" w-100 ">
                Forget Password
              </Link>

              <div className="m-3">
                <GoogleOAuthProvider clientId={process.env.REACT_APP_Clint_id}>
                  <GoogleLogin />
                </GoogleOAuthProvider>
              </div>
              <Link
                to={"/register"}
                className="text-decoration-none text-dark m-3"
              >
                Don't have an Account <strong>Register</strong>
              </Link>
            </div>
          </form>
        </center>
      </div>
    </Layout>
  );
}

export default Login;
