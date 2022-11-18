import React from "react";

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otehrProps }) => (
    <button 
    className={`${isGoogleSignIn ? 'google-sign-in': ''} custom-button`} 
    {...otehrProps}>
        {children}
    </button>
);

export default CustomButton;