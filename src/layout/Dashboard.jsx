import { NavLink, Outlet } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { FaAd, FaCalendar, FaHome, FaList, FaSearch } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div className="flex">
            {/*dashboard sidebar section */}
            <div>
                <div className=" w-64 min-h-screen bg-[#D1A054]">
                    <ul className=" menu p-4 space-y-4">
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
                        <div className="divider"></div>
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
                    </ul>
                </div>
            </div>
            {/* dashboard main content section */}
            <div className=" flex-1 p-10">
                <Outlet/>
            </div>
        </div>
    );
};

export default Dashboard;