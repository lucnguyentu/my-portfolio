import React from 'react'
import "./testimonials.scss"
import AVT1 from "../../assets/avatar1.jpg"
import AVT2 from "../../assets/avatar2.jpg"
import AVT3 from "../../assets/avatar3.jpg"
import AVT4 from "../../assets/avatar4.jpg"

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const datas = [
    {
        avatar: AVT1,
        name: "Tina Snow",
        review: "Lorem ipsum dolor sit amet, consectetur adip elit. Ius nostrud exercitation ullamcorper suscipit lobortisLorem ipsum dolor sit amet, consectetur adip suscipit lobortisLorem ipsum dolor sit amet, consectetur adip elit."
    },
    {
        avatar: AVT2,
        name: "Shatta Wale",
        review: "Lorem ipsum dolor sit amet, consectetur adip elit. Ius nostrud exercitation ullamcorper suscipit lobortisLorem ipsum dolor sit amet, consectetur adip suscipit lobortisLorem ipsum dolor sit amet, consectetur adip elit."
    },
    {
        avatar: AVT3,
        name: "Kwame Despite",
        review: "Lorem ipsum dolor sit amet, consectetur adip elit. Ius nostrud exercitation ullamcorper suscipit lobortisLorem ipsum dolor sit amet, consectetur adip suscipit lobortisLorem ipsum dolor sit amet, consectetur adip elit."
    },
    {
        avatar: AVT4,
        name: "Nana Ama McBrown",
        review: "Lorem ipsum dolor sit amet, consectetur adip elit. Ius nostrud exercitation ullamcorper suscipit lobortisLorem ipsum dolor sit amet, consectetur adip suscipit lobortisLorem ipsum dolor sit amet, consectetur adip elit."
    },
]

// use slider with https://swiperjs.com/demos
// npm i swiper

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {datas &&
                    datas.map((data, index) => (
                        <SwiperSlide className="testimonial">
                            <div className="client__avatar">
                                <img src={data.avatar} alt="Avatar One" />
                            </div>
                            <h5 className="client__name">{data.name}</h5>
                            <small className="client__review">{data.review}</small>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    )
}

export default Testimonials