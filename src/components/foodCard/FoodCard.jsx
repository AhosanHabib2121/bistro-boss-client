
const FoodCard = ({item}) => {
    const { name, image, price, recipe } = item;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={image} className=" w-full" alt="not found" /></figure>
                <p className=" absolute right-0 mr-4 mt-4 px-3 bg-[#111827] text-white">${ price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title text-center">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline hover:text-[#BB8506]  border-0 border-b-4 text-[#BB8506] border-[#BB8506]">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;