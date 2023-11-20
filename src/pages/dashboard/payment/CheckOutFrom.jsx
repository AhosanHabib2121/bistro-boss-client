import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckOutFrom = () => {
    // payment gateway in stripe 
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const { user } = useAuth();
    const [clientSecret, setClientSecret] = useState('')
    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useCart();
    const navigate = useNavigate();
    const totalPrice = cart?.reduce((accumulator, currentValue) => accumulator + currentValue?.price,0)

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
            })
       }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod);
        }
        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || "no email",
                    name: user?.displayName || 'no name'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error');
        }
        else {
            if (paymentIntent?.status == 'succeeded') {
                setTransactionId(paymentIntent?.id)

                // now save the payment in the database
                const payment = {
                    email: user?.email,
                    price: totalPrice,
                    transactionId: paymentIntent?.id,
                    date: new Date(), //utc to convert. use moment js to
                    cartIds: cart.map(item => item._id),
                    menuIds: cart.map(item => item.menuId),
                    status: 'pending'

                }
                const res = await axiosSecure.post('/api/payment', payment);
                refetch();
                if (res?.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Your payment done!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/dashboard/paymentHistory')
                }
            }
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-secondary btn-sm my-4" type="submit" disabled={!stripe || !clientSecret }>
                    Pay
                </button>
                <p className=" text-red-500">{error}</p>
                {transactionId && <p className=" text-green-500">Your Transaction id: { transactionId}</p>}
            </form>
        </div>
    );
};

export default CheckOutFrom;