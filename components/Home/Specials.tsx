"use client";
import React, { Component } from "react";
import { specials } from "@/data/foods";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { SpecialFoodOut } from "@/types/Menu";

type PropsType = {
  specials: SpecialFoodOut[];
};
export default class Specials extends Component<PropsType> {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 4,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <div className="flex flex-col justify-center items-center gap-5 pt-10">
          <h1 className=" text-primary font-sans text-sm font-medium text-center ">
            SPECIAL OFFERS
          </h1>
          <Image
            src="/separator.png"
            alt="spector"
            width={100}
            height={200}
            className="text-center"
          />
          <h1 className=" text-secondary text-4xl font-serif">
            Best Specialties
          </h1>
        </div>
        <div className="container mx-auto px-6">
          <Slider {...settings}>
            {this.props.specials.map((special, index) => (
              <div
                key={index}
                className="p-3 grid items-center justify-center "
              >
                {special.image ? (
                  <Image
                    src={`${special._imageUrl}`}
                    height={300}
                    width={200}
                    alt="breakfast"
                    className="w-full rounded-md object-cover h-80"
                  />
                ) : (
                  <Image
                    src="/menuPlaceholder.jpg"
                    height={300}
                    width={200}
                    alt="breakfast"
                    className="w-full rounded-md object-cover h-80 brightness-75 blur-sm"
                  />
                )}
                <h1 className="text-secondary text-center tracking-wider font-sans mt-5 text-2xl">
                  {special.name}
                </h1>
                <p className="text-gray-400 text-sm font-mono text-center">
                  {special?.ingridiants}
                </p>
                <h1 className="text-primary text-center">${special?.price}</h1>
              </div>
            ))}
          </Slider>
        </div>
      </>
    );
  }
}
