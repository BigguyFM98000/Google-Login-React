import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const responseMessage = (response) => {
        console.log(response);
        navigate("/home",{ replace: true })
      };
      const errorMessage = (error) => {
        console.log(error);
      };
  return (
    // <GoogleLogin
    //   onSuccess={(credentialResponse) => {
    //     console.log(credentialResponse);
    //   }}
    //   onError={() => {
    //     console.log("Login Failed");
    //   }}
    // />
        <div>
            <h2>React Google Login</h2>
            <br />
            <br />
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
  );
}

export default Login;
