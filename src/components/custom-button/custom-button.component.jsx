import React from "react";

import './custom-button.styles.scss';

const CustomButton = ({ children, ...otehrProps }) => (
    <button className="custom-button" {...otehrProps}>
        {children}
    </button>
);

export default CustomButton;