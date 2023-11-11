
const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className=" flex space-x-5 items-center">
            <img src={image} style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" alt="not found" />
            <div>
                <h3 className=" uppercase">{name}-----------------</h3>
                <p>{recipe}</p>
            </div>
            <p className=" text-[#BB8506]">${price}</p>
        </div>
    );
};

export default MenuItem;