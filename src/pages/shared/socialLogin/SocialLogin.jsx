import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { loginWithGoogle } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        loginWithGoogle()
            .then(result => {
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email
                }
                axiosPublic.post('/api/user', userInfo)
                    .then(() => {
                        navigate('/')
                    })
            })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn btn-outline w-3/4 normal-case">
                <FcGoogle className=" text-xl"/>
                Continue with google
            </button>
        </div>
    );
};

export default SocialLogin;