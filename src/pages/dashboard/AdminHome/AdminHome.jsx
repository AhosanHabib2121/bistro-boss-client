import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats=[] } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('admin/stats');
            return res.data;
        }
    })

    const { data: chartData = [] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order/stats');
            return res.data;
        }
    })

    // custom shape for the bar chart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // custom shape for the pie chart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    
    // const pieChart = chartData.map(data => {
    //     return {name: data.category, value: data.revenue}
    // })

    // fake data
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];
    return (
        <div className=" h-screen">
            <h2 className=" text-3xl mb-5">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
            {/* stats here */}
            <div className=" grid  lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                {/* revenue here */}
                <div className="stats bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF]">
                    <div className="stat flex text-white">
                        <div className="stat-figure text-secondary">
                            <BsFillCalendarEventFill className=" text-3xl text-white"/>
                        </div>
                        <div className="">
                            <div className="stat-value">{stats?.revenue}</div>
                            <div className="stat-title text-white">Revenue</div>
                        </div>
                    </div>
                </div>
                {/* customer and user here */}
                <div className="stats bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]">
                    <div className="stat flex text-white">
                        <div className="stat-figure text-secondary">
                            <FaUsers className=" text-3xl text-white" />
                        </div>
                        <div className="">
                            <div className="stat-value">{stats?.users}</div>
                            <div className="stat-title text-white">Users</div>
                        </div>
                    </div>
                </div>
                {/* menu and product here */}
                <div className="stats bg-gradient-to-r from-[#FE4880] to-[#FECDE9]">
                    <div className="stat flex text-white">
                        <div className="stat-figure text-secondary">
                            <MdOutlineRestaurantMenu className=" text-3xl text-white" />
                        </div>
                        <div className="">
                            <div className="stat-value">{stats?.menuItem}</div>
                            <div className="stat-title text-white">Menu and product</div>
                        </div>
                    </div>
                </div>
                {/* payment and order here */}
                <div className="stats bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF]">
                    <div className="stat flex text-white">
                        <div className="stat-figure text-secondary">
                            <CiDeliveryTruck className=" text-4xl text-white" />
                        </div>
                        <div className="">
                            <div className="stat-value">{stats?.paymentOrder}</div>
                            <div className="stat-title text-white">Order</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* chart here */}
            <div className=" flex mt-8">
                {/* bar chart */}
                <div className="w-1/2">
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                {/* pie chart  problem ase*/}
                <div className="w-1/2">

                    <PieChart width={400} height={400}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend></Legend>
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;