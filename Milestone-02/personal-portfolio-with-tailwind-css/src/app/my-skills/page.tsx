
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";




const Page = () => {
  // Sample skills data
  const skills = [
    { name: 'JavaScript', image: '/ts.png' },
    { name: 'TypeScript', image: '/tailwind.png' },
    { name: 'React', image: '/html.png' },
    { name: 'Next.js', image: '/css.png' },
    { name: 'Tailwind CSS', image: '/js.png' },
    { name: 'Node.js', image: '/next-js.png' },
  ];

  return (
    <div
      style={{ backgroundImage: "url(/myskills-bg.png)" }}
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
    >




      <div className="flex flex-col gap-10 max-w-[80%] text-center items-center">



        <h1 className="font-semibold text-white text-4xl">
          Skills{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">& Technologies</span>
        </h1>



        <p className="text-white text-lg">
          Using the latest tech this world has to offer
        </p>






        {/* for Swiper Animation */}

        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[90%]"
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <Image
                src={skill.image}
                alt={skill.name}
                width={100}
                height={100}
              />
            </SwiperSlide>
          ))}
        </Swiper>








{/* reverse direction of images */}
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[80%]"
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <Image
                src={skill.image}
                alt={skill.name}
                width={100}
                height={100}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Page;

