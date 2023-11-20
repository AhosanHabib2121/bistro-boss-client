import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    
    const { data:payments=[] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/payment/${user?.email}`);
            return res.data;
        }
    }) 

    return (
        <div className=" h-screen">
            {/* section title here */}
            <SectionTitle
                subHeading='---At a Glance!---'
                heading='PAYMENT HISTORY'
            />

            {/* main content here */}
            <div className=" mt-8 mx-10 bg-slate-100 p-5">
                <h2 className=" text-2xl font-semibold">Total Payments: {payments?.length}</h2>
                <div className="overflow-x-auto rounded-lg mt-4">
                    <table className="table table-zebra ">
                        {/* head */}
                        <thead className=" bg-[#D1A054] text-white text-lg">
                            <tr>
                                <th>No.</th>
                                <th>Email</th>
                                <th>Price</th>
                                <th>Transaction Id</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments.map((payment, idx) => <tr key={payment._id}>
                                    <th>{idx + 1}</th>
                                    <td>{payment.email}</td>
                                    <td>${payment.price}</td>
                                    <td>{payment.transactionId}</td>
                                    <td>{payment.status }</td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;