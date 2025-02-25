import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";
import Home from "../../assets/img/21.png";
import Link from "next/link";
import SliderArrows from "../common/SliderArrows";
import SearchProperty from "./SearchProperty";

const Hero = () => {
  const slider = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    adaptiveHeight: false,
    autoplay: false,
    arrows: false,
  };
  return (
    <div id="hero" className="relative">
      <Slider ref={slider} {...settings}>
        <div>
          <div className="bg-slate-100 p-12 grid grid-cols-12 items-center">
            <div className="pl-8 col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6">
              <div className="icon flex items-center gap-2">
                <i className="fa-solid fa-house-chimney text-red-500"></i>
                <span className="text-sm slide-title animated">
                  Real Estate Agency
                </span>
              </div>
              <div className="slick-title my-8 font-semibold">
                <h1>Find Your Solution with Phoenix AI</h1>
              </div>
              <div className="slick-description my-4 border-l-2 border-gray-300 px-4 text-slate-500">
                <p className="text-sm pr-0 md:pr-36 lg:pr-36 leading-8">
                  Phoenix AI is a personalized AI recommendation system designed to help users make smarter decisions in price and property selection. By leveraging advanced algorithms and data analytics, it provides tailored suggestions based on user preferences, budget, and market trends.
                </p>
              </div>
              <div className="slick-button mt-16">
                <Link
                  href={"/contact"}
                  className="hover:bg-slate-800 hover:cursor-pointer bg-red-500 text-white p-3 rounded transition-all"
                >
                  Make An Inquiry
                </Link>
              </div>
            </div>
            <div className="mt-20 md:mt-20 lg:mt-0 col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 hidden md:block">
              <Image src={Home} alt="Loading..." />
            </div>
          </div>
        </div>
        <div>
          <div className="bg-slate-100 p-12 grid grid-cols-12 items-center">
            <div className="mb-16 lg:my-0 hidden md:block sm:col-span-12 md:col-span-12 lg:col-span-6">
              <Image src={Home} alt="Loading..." />
            </div>
            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 pr-8">
              <div className="icon flex justify-end items-center gap-2">
                <i className="fa-solid fa-house-chimney text-red-500"></i>
                <span className="text-sm slide-title animated">
                  Real Estate Agency
                </span>
              </div>
              <div className="slick-title text-end my-8 font-semibold">
                <h1>Find Your Solution with Phoenix AI</h1>
              </div>
              <div className="slick-description my-4 border-r-2 border-gray-300 px-4 text-slate-500">
                <p className="text-sm pr-0 pl-10 md:pl-36 lg:pl-36 leading-8">
                  Phoenix AI is a personalized AI recommendation system designed to help users make smarter decisions in price and property selection. By leveraging advanced algorithms and data analytics, it provides tailored suggestions based on user preferences, budget, and market trends.
                </p>
              </div>
              <div className="slick-button mt-16 text-end">
                <Link
                  href={"/contact"}
                  className="hover:bg-slate-800 hover:cursor-pointer bg-red-500 text-white p-3 rounded transition-all"
                >
                  Make An Inquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-slate-100 p-12 grid grid-cols-12 items-center">
            <div className="pl-8 col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6">
              <div className="icon flex items-center gap-2">
                <i className="fa-solid fa-house-chimney text-red-500"></i>
                <span className="text-sm slide-title animated">
                  Real Estate Agency
                </span>
              </div>
              <div className="slick-title my-8 font-semibold">
                <h1>Find Your Solution with Phoenix AI</h1>
              </div>
              <div className="slick-description my-4 border-l-2 border-gray-300 px-4 text-slate-500">
                <p className="text-sm pr-0 md:pr-36 lg:pr-36 leading-8">
                  Phoenix AI is a personalized AI recommendation system designed to help users make smarter decisions in price and property selection. By leveraging advanced algorithms and data analytics, it provides tailored suggestions based on user preferences, budget, and market trends.
                </p>
              </div>
              <div className="slick-button mt-16">
                <Link
                  href={"/contact"}
                  className="hover:bg-slate-800 hover:cursor-pointer bg-red-500 text-white p-3 rounded transition-all"
                >
                  Make An Inquiry
                </Link>
              </div>
            </div>
            <div className="mt-20 md:mt-20 lg:mt-0 col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 hidden md:block">
              <Image src={Home} alt="Loading..." />
            </div>
          </div>
        </div>
      </Slider>
      <SliderArrows slider={slider} top="top-2/4" />
      <SearchProperty />
    </div>
  );
};

export default Hero;
