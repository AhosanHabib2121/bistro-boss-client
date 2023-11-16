import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/api/user')
            return res.data
        }

    })   
    // handleMakeAdmin use here
    const handleMakeAdmin = user => {
        axiosSecure.patch(`/api/user/admin/${user._id}`)
            .then(res => {
                refetch();
                if (res.data.matchedCount == 1) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an admin now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
        })
    }

    // handleDelete user use here
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/api/user/${id}`)
                    .then(res => {
                        if (res.data?.deletedCount == 1) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }
    return (
        <div className=" mx-14 mt-12">
            <div className=" mb-8">
                <p className=" text-3xl font-bold">Total user: {users?.length} </p>
            </div>
            {/* user table here */}
            <div className="overflow-x-auto rounded-lg">
                <table className="table table-zebra ">
                    {/* head */}
                    <thead className=" bg-[#D1A054] text-white text-lg">
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, idx) => <tr key={user._id}>
                                <th>{idx +1}</th>
                                <td>{ user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role == 'Admin' ?'Admin' : <button onClick={() => handleMakeAdmin(user)} className="btn hover:bg-[#c08f46] bg-[#D1A054] btn-md normal-case">
                                            <FaUsers className=" text-xl text-white" />
                                        </button>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user._id)} className="btn btn-ghost btn-xs normal-case">
                                        <FaTrashAlt className=" text-xl text-red-600" />
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

export default AllUsers;