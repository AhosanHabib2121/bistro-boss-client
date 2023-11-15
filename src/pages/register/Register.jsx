import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../shared/socialLogin/SocialLogin";

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const { createAccount, profileUpdate } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const onSubmit = (data) => {
        createAccount(data.email, data.password)
            .then(() => {
                profileUpdate(data.name, data.photoUrl)
                    .then(() => {
                        const userData = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/api/user', userData)
                            .then(res => {
                                if(res.data.insertedId){
                                    reset();
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "User create successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/')
                                }
                            })
                   
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            {/* website naming title */}
            <Helmet>
                <title>Bistro Boss | Sign up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered"  />
                                {errors.name && <span className=" text-red-500 mt-1">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input type="text" {...register("photoUrl", { required: true })} placeholder="photo url" className="input input-bordered"  />
                                {errors.photoUrl && <span className=" text-red-500 mt-1">Photo url is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", {required:true})} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className=" text-red-500 mt-1">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20, })}
                                    // pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6}/ 
                                    name="password" placeholder="password" className="input input-bordered" />
                                {/* password authentication */}
                                {/* {errors.password?.type === "required" && <span className=" text-red-500 mt-1">Password is required</span>}
                                {errors.password?.type === "minLength" && <span className=" text-red-500 mt-1">Password must be 6 characters</span>}
                                {errors.password?.type === "maxLength" && <span className=" text-red-500 mt-1">Password must be less then 20 characters</span>}
                                {errors.password?.type === "pattern" && <span className=" text-red-500 mt-1">Password must be one uppercase one lowercase one number and one special characters</span>} */}

                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary" value='Sign up'/>
                            </div>
                        </form>
                        <div className=' text-center mb-4'>
                            <p>Already have an account? <Link to='/login' className='text-yellow-700 underline'>Login</Link></p>
                        </div>
                        <div className="divider mx-6"></div>
                        {/* google login here */}
                        <div className=' mb-4 text-center'>
                            <SocialLogin />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;