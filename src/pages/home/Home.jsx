import Banner from "./banner/Banner";
import Category from "./category/Category";
import Featured from "./featured/Featured";
import PopularMenu from "./popularMenu/PopularMenu";
import Testimonial from "./testimonial/Testimonial";

const Home = () => {
    return (
        <div>
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