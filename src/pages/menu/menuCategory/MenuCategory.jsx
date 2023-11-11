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
        </div>
    );
};

export default MenuCategory;