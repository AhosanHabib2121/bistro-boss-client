import { Helmet } from "react-helmet-async";
import Cover from "../shared/cover/Cover";
import menuImage from '../../assets/menu/banner3.jpg'
import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./menuCategory/MenuCategory";
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'


const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            {/* website naming title */}
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>

            {/* cover section here  */}
            <Cover
                bgImg={menuImage}
                height='600px'
                title='OUR MENU'
                shortDes='Would you like to try a dish?'
            />

            {/* category menu section area */}
            <div className=" my-14">
                {/* section title here */}
                <SectionTitle
                    subHeading={"---Don't miss---"}
                    heading={"TODAY'S OFFER"}
                />

                {/* offered menu items here */}
                <MenuCategory items={offered} />

                {/* desserts menu items here */}
                <MenuCategory
                    bgImg={dessertImg}
                    items={desserts}
                    title={'desserts'}
                    shortDes={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                />

                {/* pizza menu items here */}
                <MenuCategory
                    bgImg={pizzaImg}
                    items={pizza}
                    title={'pizza'}
                    shortDes={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                />

                {/* salad menu items here */}
                <MenuCategory
                    bgImg={saladImg}
                    items={salad}
                    title={'salad'}
                    shortDes={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                />

                {/* soup menu items here */}
                <MenuCategory
                    bgImg={soupImg}
                    items={soup}
                    title={'soup'}
                    shortDes={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                />

            </div>

            
        </div>
    );
};

export default Menu;