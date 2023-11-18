import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItem = () => {
    const [menu, ,refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    // item handleDelete here
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/api/menu/${id}`)
                    if (res.data?.deletedCount === 1) {
                        refetch()
                        Swal.fire({
                            title: "Deleted!",
                            text: "Menu has been deleted.",
                            icon: "success"
                        });
                    }
               
            }
        });
    }

    return (
        <div className="">
            {/* section title here */}
            <SectionTitle
                subHeading='---Hurry Up!---'
                heading='MANAGE ALL ITEMS'
            />
            {/* data table here */}
            <div className="overflow-x-auto overflow-scroll h-[400px]  rounded-lg mt-16 mx-12">
                <table className="table">
                    {/* head */}
                    <thead className=" bg-[#D1A054] text-white text-lg ">
                        <tr>
                            <th>
                               #
                            </th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>UPDATE</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, idx) => <tr key={item._id}>
                                <td>{ idx +1}</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image } alt="not found" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                   {item.name}
                                </td>
                                <td>{ item.price}</td>
                                <td>
                                    <Link to={`/dashboard/manageUpdate/${item._id}`}>
                                        <button className="btn hover:bg-[#c08f46] bg-[#D1A054]  normal-case btn-md">
                                            <FaEdit className=" text-lg text-white" />
                                        </button>
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item._id)} className=" btn-md normal-case">
                                        <FaTrashAlt className=" text-2xl hover:text-red-600 text-red-600" />
                                    </button>
                                </td>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItem;