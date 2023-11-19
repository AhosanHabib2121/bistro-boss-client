import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutFrom from "./CheckOutFrom";

// TODO: Publishable key add here
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
    return (
        <div className=" h-screen ">
            {/* section title here */}
            <SectionTitle
                subHeading='Payment'
                heading='Please pay to eat'
            />
            {/* content area */}
            <div className="mt-14">
                {/* payment gateway in stripe */}
                <Elements stripe={stripePromise}>
                    <CheckOutFrom/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;