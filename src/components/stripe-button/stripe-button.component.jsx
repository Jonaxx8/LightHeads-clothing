import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51MQ6ivSCNa6yoeuCk3r9C2nmpO5uUjVRjP3j4vHlFc89mKXBzp6aHSrbEa4xf7CR1HFbRdHCmcUa7OL7xzsuf5fm00uuHlSQyH';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout 
            label="Pay Now"
            name="LH Clothing Ltd."
            billingAddress
            shippingAddress
            // image="https://svgshare.com/i/CUz.svg"
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel = "Pay Now"
            token={ onToken }
            stripeKey = {publishableKey}
        />
    )
};

export default StripeCheckoutButton;