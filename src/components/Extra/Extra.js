import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import img1 from '../../images/extra.jpg';
import img2 from '../../images/extra2.jpg';
import img3 from '../../images/extra3.jpg';
import img4 from '../../images/extra4.jpg';
import img5 from '../../images/extra5.jpg';
import img6 from '../../images/extra6.jpg';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';


const Extra = () => {
    return (
        <div className='container'>
            <h2 className='text-center text-secondary mt-4'>Most Sells Items</h2>
            

            <Swiper className='my-5 pb-5 ' 
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <div>
                    <SwiperSlide> <img src={img1} height={300} alt="" /> </SwiperSlide>
                    <SwiperSlide> <img src={img2} height={300} alt="" /> </SwiperSlide>
                    <SwiperSlide> <img src={img3} height={300} alt="" /> </SwiperSlide>
                    <SwiperSlide> <img src={img4} height={300} alt="" /> </SwiperSlide>
                    <SwiperSlide> <img src={img5} height={300} alt="" /> </SwiperSlide>
                    <SwiperSlide> <img src={img6} height={300} alt="" /> </SwiperSlide>
                </div>
                
            </Swiper>
        </div>
    );
};

export default Extra;