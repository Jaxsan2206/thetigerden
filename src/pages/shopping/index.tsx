//  For testing - use these card numbers with any other details
// Successful payment: 4242424242424242 
// Failed payment:     4000000000009995
// Requires auth:      4000002500003155
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState, useEffect } from 'react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

const CheckoutForm = () => {
  const [message, setMessage] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) return; // Abort if stripe or elements isn't loaded yet

    const res = await fetch('/api/payment_intents', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    // Ideally we want to get these values from the completed shop page instead of hardcoding it in the req
      body: JSON.stringify({
        amount: 1000,
      }),
    });

    const clientSecret = await res.text();

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)!,
        billing_details: {
          name: 'John Doe',
        },
      },
    });

    if (result.error) {
      setMessage(result.error.message);
    } else {
      if (result.paymentIntent?.status === 'succeeded') {
        setMessage('Payment successful');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>Pay</button>
      <p>{message}</p>
    </form>
  );
};

const ShopPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default ShopPage;
