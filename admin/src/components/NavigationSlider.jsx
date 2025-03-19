import React from "react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function NavigationSlider({ data }) {
    return (
        <div>
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 2000, // 2 soniya har bir slaydda qolishi uchun
                    disableOnInteraction: false,
                }}
                // pagination={{ clickable: true }}
                modules={[Autoplay]} // Autoplay modulini qo'shish kerak!
            >
                {data &&
                    data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex gap-2 items-center p-3 bg-primary rounded-xl">
                                <div className="w-3/5">
                                    <p className="mb-3 text-xs text-white">{item.text}</p>
                                    <Link
                                        to={item.href}
                                        className="btn btn-accent text-nowrap text-xs hover:underline"
                                    >
                                        <FaPlus />
                                        <span>{item.buttonText}</span>
                                    </Link>
                                </div>
                                <div className="flex-1 flex items-center justify-center">
                                    <img
                                        src={item.img}
                                        alt="Navigation"
                                        className="w-full h-16 object-contain"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
}
