import SectionTitle from "../../../components/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white  relative">
            <div className="bg-slate-950 bg-opacity-60  py-32">
                {/* section title here */}
                <SectionTitle
                    subHeading={'---Check it out---'}
                    heading={'FROM OUR MENU'}
                >
                </SectionTitle>

                {/* featured section here */}
                <div className=" flex justify-center items-center gap-14 mt-16 px-48 ">
                    <div className="flex-1">
                        <img src={featuredImg} className="w-[700px] h-[350px] object-cover rounded" alt="not found" />
                    </div>
                    <div className=" space-y-3 flex-1">
                        <h4>March 20, 2023</h4>
                        <h2> WHERE CAN I GET SOME?</h2>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>

                        <button className="btn btn-outline border-0 border-b-4 text-white">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;