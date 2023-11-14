import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    // use to tanstack query
    const { data:cart, refetch } = useQuery({
        queryKey: ['cartData', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/carts?email=${user?.email}`)
            return res.data;
        }
    })
    return [cart, refetch];
}
export default useCart;