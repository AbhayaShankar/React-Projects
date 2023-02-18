import React from "react";
import spotifyLogo from "../../Resources/Images/spotify-logo.jpg";
import "./Login.css";
import { loginUrl } from "../../spotify";

function Login() {
  return (
    <div className="login">
      {/* Spotify Logo */}
      <img src={spotifyLogo} alt="logo" />
      {/* Login sign up page */}
      <a href={loginUrl}>LOGIN TO SPOTIFY</a>
    </div>
  );
}

export default Login;
