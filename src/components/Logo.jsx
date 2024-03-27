import React from "react";
import logoSrc from "../assets/blog-logo.jpeg";

const Logo = ({ width = "100px" }) => {
   return (
      <>
         <img
            className={`rounded-3xl`}
            width={`${width}`}
            src={logoSrc}
            alt="logo"
         />
      </>
   );
};

export default Logo;
