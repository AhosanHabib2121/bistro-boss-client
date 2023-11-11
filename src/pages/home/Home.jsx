import Banner from "./banner/Banner";
import Category from "./category/Category";
import Featured from "./featured/Featured";
import PopularMenu from "./popularMenu/PopularMenu";
import Testimonial from "./testimonial/Testimonial";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            {/* website naming title */}
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>

            {/* banner section here */}
            <Banner />
            
            {/* category section here */}
            <Category />
            
            {/* popularMenu section here */}
            <PopularMenu />
            
            {/* featured section here */}
            <Featured />
            
            {/* testimonial section here */}
            <Testimonial/>
        </div>
    );
};

export default Home;