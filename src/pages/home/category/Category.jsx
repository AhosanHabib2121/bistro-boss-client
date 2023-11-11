import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle';

const Category = () => {
    return (
        <div>
            {/* section title here */}
            <SectionTitle
                subHeading={'---From 11:00am to 10:00pm---'}
                heading={'ORDER ONLINE'}
            >
            </SectionTitle>

            {/* swiper and content area */}
            <div className=' mt-14'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mb-20"
                >
                    <SwiperSlide>
                        <img src={slide1} alt="not found" />
                        <h2 className=' text-4xl uppercase -mt-20 text-center text-[#3f3f3f]'>Salads</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="not found" />
                        <h2 className=' text-4xl uppercase -mt-24 text-center text-[#3f3f3f]'>Pizzas</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="not found" />
                        <h2 className=' text-4xl uppercase -mt-24 text-center text-[#3f3f3f]'>Soups</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="not found" />
                        <h2 className=' text-4xl uppercase text-center -mt-24 text-[#3f3f3f]'>Desserts</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} alt="not found" />
                        <h2 className=' text-4xl uppercase -mt-24 text-center text-[#3f3f3f]'>Salads</h2>
                    </SwiperSlide>
                </Swiper>
           </div>
        </div>
    );
};

export default Category;