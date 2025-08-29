"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import BackEndSkills from "./back-end/page";
import FrontEndSkills from "./front-end/page";
import FullStackSkills from "./fullstack/page";

export default function RotateSkills() {
  return (
    <div className="flex justify-center items-center w-full min-h-100vh p-4">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <FullStackSkills />
        </SwiperSlide>
        <SwiperSlide>
          <FrontEndSkills />
        </SwiperSlide>
        <SwiperSlide>
          <BackEndSkills />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
