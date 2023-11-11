import { Link } from "react-router-dom";
import Cover from "../../shared/cover/Cover";
import MenuItem from "../../shared/menuItem/MenuItem";

const MenuCategory = ({ items, title, bgImg, shortDes }) => {

    return (
        <div>
            {/* cover section here  */}
            {title && <Cover
                bgImg={bgImg}
                height='600px'
                title={title}
                shortDes={shortDes}
            />}

            <div className="grid md:grid-cols-2 gap-8 my-12">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className=" text-center mb-7">
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline border-0 border-b-4 text-[#232323]">Order now</button>
                </Link>
           </div>
        </div>
    );
};

export default MenuCategory;