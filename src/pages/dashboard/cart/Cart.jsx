import useCart from "../../../hooks/useCart";

const Cart = () => {
    const [cart] = useCart();
    const totalPrice = cart?.reduce((total, item) => total + item.price, 0);

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
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart?.map(item => <tr key={item._id}>
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
                                    <button className="btn btn-ghost btn-xs normal-case">details</button>
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