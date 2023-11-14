import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/footer/Footer";
import Navbar from "../pages/shared/navbar/Navbar";

const Root = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register');

    return (
        <div className='max-w-screen-xl mx-auto'>
            {/* navbar section here */}
            {noHeaderFooter || <Navbar />}
            
            {/* outlet here */}
            <Outlet/>

            {/* footer section */}
            {noHeaderFooter || <Footer />}
            
        </div>
    );
};

export default Root;