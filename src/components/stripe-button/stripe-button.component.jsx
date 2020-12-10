import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HwxX0LRhAzAlXlHbfmiZ1OAT4tukP5v8KvbO1tb7Y2rf3M9JLbhKnAO0xkrNPc1Py3CRTgruUcf1UeOE1ileWqs00DEHDIDXI";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Sneakers Shop"
      billingAddress
      shippingAddress
      image="https://image.flaticon.com/icons/png/512/88/88746.png"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
