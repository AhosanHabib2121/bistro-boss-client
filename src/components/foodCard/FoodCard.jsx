import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({item}) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart();
    
    const handleAddToCart = () => {
        if (user && user?.email){
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/api/carts', cartItem)
                .then(res => {
                    if (res.data?.acknowledged) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} food added to the cart`,
                            showConfirmButton: false,
                            timer: 2000
                        });
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "Your are not logged in",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state:{from: location}})
                }
            });
            
        }
    }
    return (
        <div className="">
            <div className="card bg-base-100 shadow-xl h-full">
                <figure><img src={image} className=" w-full" alt="not found" /></figure>
                <p className=" absolute right-0 mr-4 mt-4 px-3 bg-[#111827] text-white">${ price}</p>
                <div className="card-body items-center">
                    <h2 className="card-title text-center">{name}</h2>
                    <p className="">{recipe}</p>
                    <div className="card-actions justify-end items-end">
                        <button onClick={handleAddToCart} className="btn btn-outline hover:text-[#BB8506]  border-0 border-b-4 text-[#BB8506] border-[#BB8506]">
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;