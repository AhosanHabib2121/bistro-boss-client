import { NavLink, Outlet } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { FaAd, FaBook, FaCalendar, FaHome, FaList, FaSearch, FaUsers, FaUtensils} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {

    // TODO: get isAdmin value from the database
    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            {/*dashboard sidebar section */}
            <div className=" w-64">
                <div className="h-full bg-[#D1A054] ">
                    <ul className=" menu p-4 space-y-4">
                        {/* admin and user dashboard site here */}
                        {
                            isAdmin ? <>
                                <li>
                                    <NavLink to='/dashboard/adminHome'>
                                        <FaHome className=" text-xl" />
                                        Admin Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/addItem'>
                                        <FaUtensils className=" text-xl" />
                                        Add Item</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/manageItems'>
                                        <FaList className=" text-xl" />
                                        Manage Items</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/manageBookings'>
                                        <FaBook className=" text-xl" />
                                        Manage Bookings</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/allUsers'>
                                        <FaUsers className=" text-xl" />
                                        All users</NavLink>
                                </li>
                            </>
                            : <>
                                    <li>
                                        <NavLink to='/dashboard/userHome'>
                                            <FaHome className=" text-xl" />
                                            User Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/reservation'>
                                            <FaCalendar className=" text-xl" />
                                            Reservation</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/cart'>
                                            <BsCart4 className=" text-xl" />
                                            My cart</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/review'>
                                            <FaAd className=" text-xl" />
                                            Add Review</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/bookings'>
                                            <FaList className=" text-xl" />
                                            My Bookings</NavLink>
                                    </li>
                                   
                                </>
                        }

                        <div className="divider"></div>
                        {/* client site here */}
                        <li>
                            <NavLink to='/'>
                                <FaHome className=" text-xl" />
                                Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/order/salad'>
                                <FaSearch className=" text-xl" />
                                Menu</NavLink>
                        </li>
                        <li>
                            <NavLink to='/order/salad'>
                                <MdEmail className='text-xl' />
                                Contact</NavLink>
                        </li>  
                       
                       
                    </ul>
                </div>
            </div>
            {/* dashboard main content section */}
            <div className=" flex-1 p-10 ">
                <Outlet/>
            </div>
        </div>
    );
};

export default Dashboard;