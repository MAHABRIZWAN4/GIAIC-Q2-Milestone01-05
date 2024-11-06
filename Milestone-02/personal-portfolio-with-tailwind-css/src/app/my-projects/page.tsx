"use client"
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import Particle from "../Components/Particle";

// CARD DATA
export const ServiceData = [
  {
    title: "ATM MACHINE",
    content: "A student registration form collects personal details, contact information, and educational background for enrollment.",
    BackgroundImage: "/ATM3.PNG",
    link: "https://student-registration-form--bice.vercel.app/"
  },
  {
    title: "ADVENTURE GAME",
    content: "A TypeScript adventure game with exciting exploration and dynamic character interactions.",
    BackgroundImage: "/AG.png",
    link: "https://github.com/MAHABRIZWAN4/Adventure-Game"
  },
  {
    title: "CURRENCY CONVERTOR",
    content: "A TypeScript-based currency converter that quickly converts between multiple currencies with up-to-date exchange rates.",
    BackgroundImage: "/CurrencyConvertor.png",
    link: "https://github.com/MAHABRIZWAN4/Currency-converter"
  },
  {
    title: "AGE CALCULATOR",
    content: "An age calculator that quickly computes your age from the given date of birth.",
    BackgroundImage: "/age22.jpg",
    link: "https://github.com/MAHABRIZWAN4/Project-Age-Calculator"
  },
  {
    title: "NUMBER GUESSING GAME",
    content: "A fun number guessing game where players try to guess a randomly selected number within a set range.",
    BackgroundImage: "/number1.png",
    link: "https://github.com/MAHABRIZWAN4/cli-number-guessing-game"
  },
  {
    title: "OOP_MY BANK",
    content: "MyBank is an OOP-based banking system where users can create accounts, check balances, deposit, and withdraw funds securely.",
    BackgroundImage: "/oopMyBank.JPG",
    link: "https://github.com/MAHABRIZWAN4/OOP_MyBank"
  },
];

export default function ProjectCard() {
  return (
    <div className="flex items-center justify-center flex-col h-screen bg-[#6c34af]">
      <h1 className="text-purple-950 text-3xl font-extrabold mb-5 mt-2">MY PROJECTS</h1>
      <Particle />

      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 1,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 2,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <Link href={item.link} target="" passHref>
              <div className="flex flex-col gap-6 mb-10 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[350px] lg:w-[300px] overflow-hidden cursor-pointer">
                {/* Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.BackgroundImage})` }}
                ></div>

                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />

                {/* Head Icon */}
                <div className="relative flex flex-col gap-3 z-10 mt-28">
                  <h1 className="text-xl lg:text-2xl text-black font-extrabold">{item.title}</h1>
                  <p className="lg:text-[16px] text-white">{item.content}</p>
                </div>

                <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100 z-10" />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
