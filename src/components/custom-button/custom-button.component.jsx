import React from "react";

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otehrProps }) => (
    <button 
    className={`${inverted ? 'inverted': ''} ${isGoogleSignIn ? 'google-sign-in': ''} custom-button`} 
    {...otehrProps}>
        {children}
    </button>
);

export default CustomButton;