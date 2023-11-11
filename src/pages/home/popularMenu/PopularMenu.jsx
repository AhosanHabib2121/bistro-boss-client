import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../../menu/menuCategory/MenuCategory";
import MenuItem from "../../shared/menuItem/MenuItem";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    return (
        <section className=" mb-10">
            {/* section title here */}
            <SectionTitle
                subHeading={'---Check it out---'}
                heading={'FROM OUR MENU'}
            />

            {/* content area */}
            <MenuCategory
                items={popular}
            />
            {/* <div className="grid md:grid-cols-2 gap-8 my-12">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item ={item}
                    ></MenuItem>)
                }
            </div> */}
            
            <div className=" text-center">
                <button className="btn btn-outline border-0 border-b-4">View full menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;