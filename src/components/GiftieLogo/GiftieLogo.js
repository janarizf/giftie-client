import React from "react";
import logo from "../../img/giftie_logo_white.png";

const GiftieLogo = ({ ...props }) => {
  return <img src={logo} alt='giftie-logo' {...props} />;
};

export default GiftieLogo;
