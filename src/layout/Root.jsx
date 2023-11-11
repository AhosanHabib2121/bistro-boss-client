import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/footer/Footer";
import Navbar from "../pages/shared/navbar/Navbar";

const Root = () => {
    return (
        <div>
            {/* navbar section here */}
            <Navbar/>
            
            {/* outlet here */}
            <Outlet/>

            {/* footer section */}
            <Footer/>
        </div>
    );
};

export default Root;