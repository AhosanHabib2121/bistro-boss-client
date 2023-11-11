import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../../shared/menuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category == 'popular')
            setMenu(popularItems);
        })
    }, [])

    return (
        <section className=" mb-10">
            {/* section title here */}
            <SectionTitle
                subHeading={'---Check it out---'}
                heading={'FROM OUR MENU'}
            />

            {/* content area */}
            <div className="grid md:grid-cols-2 gap-8 my-12">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item ={item}
                    ></MenuItem>)
                }
            </div>
            <div className=" text-center">
                <button className="btn btn-outline border-0 border-b-4">View full menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;