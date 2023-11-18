import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItem = () => {
    const { register, handleSubmit, reset} = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async(data) => {
        const imageFile = { image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            }
        })
        if (res.data?.success) {
            // now send the menu item data to the server with image
            const menuItem = {
                name: data?.name,
                category: data?.category,
                price: parseFloat(data?.price),
                recipe: data?.recipe,
                image: res.data?.data?.display_url
            }
            const menuRes = await axiosSecure.post('/api/menu', menuItem);
            // console.log(menuRes.data)
            if (menuRes.data.insertedId) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title:`${data?.name} is add the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    };
    
    return (
        <div className="mb-48">
            {/* section title */}
            <SectionTitle
                subHeading="---What' s new?---"
                heading='ADD AN ITEM'
            />
            {/* from section here */}
            <div className=" mt-16 mx-12 bg-[#e5e5e5] p-10 rounded">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* recipe name */}
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text"> Recipe Name*</span>
                        </label>
                        <input
                            {...register("name", {required:true})}
                            type="text"
                            required
                            placeholder="Recipe name" className="input input-bordered w-full " />
                    </div>
                    {/* category and price here */}
                    <div className=" flex gap-6">
                        {/* category here */}
                        <div className="form-control w-full mb-6">
                            <label className="label">
                                <span className="label-text"> Category*</span>
                            </label>
                            <select defaultValue='default'  {...register("category", { required: true })} className="select select-bordered w-full" >
                                <option disabled value='default'>Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        {/* price here */}
                        <div className="form-control w-full mb-6">
                            <label className="label">
                                <span className="label-text"> Price*</span>
                            </label>
                            <input
                                {...register("price", { required: true })}
                                type="number"
                                placeholder="price" className="input input-bordered w-full " />
                        </div>
                    </div>
                    {/* Recipe details */}
                    <div className="form-control mb-6">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea  {...register("recipe", { required: true })}  className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                    </div>
                    <div className="form-control mb-6">
                        <input {...register("image", { required: true })}  type="file" className="file-input file-input-ghost bg-inherit w-full max-w-xs normal-case" />
                    </div>
                    <button className="btn flex items-center
                    gap-2 bg-gradient-to-r from-[#6c4c1cbd] to-[#B58130] text-white">
                        Add Item
                        <FaUtensils className="" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItem;