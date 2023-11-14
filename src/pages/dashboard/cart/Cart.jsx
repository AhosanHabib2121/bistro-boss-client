import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart?.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();

    const handleDelete = id => {
        Swal .fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/api/carts/${id}`)
                    .then(res => {
                        if (res.data?.deletedCount == 1) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Food has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                
            }
        });
    }
    return (
        <div>
            <div className=" flex  justify-evenly">
                <h2 className=" text-4xl font-bold">Item: { cart?.length}</h2>
                <h2 className=" text-4xl font-bold">Total Price: {totalPrice}</h2>
                <button className=" btn btn-secondary ">Pay</button>
            </div>
            {/* table content here */}
            <div className="overflow-x-auto mt-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart?.map((item, idx) => <tr key={item._id}>
                                <td>
                                   {idx+1}
                                </td>
                                <td>
                                    <div className="mask mask-squircle w-24 ">
                                        <img src={item.image} alt="not found" />
                                    </div>
                                </td>
                                <td>
                                    {item?.name}
                                </td>
                                <td>
                                    {item?.price}
                                </td>
                                <th>
                                    <button onClick={()=> handleDelete(item?._id)} className="btn btn-ghost btn-xs normal-case">
                                        <FaTrashAlt className=" text-xl text-red-600"/>
                                    </button>
                                </th>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;