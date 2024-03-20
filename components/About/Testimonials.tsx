"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { specials } from "@/data/foods";
import { Component, ReactNode } from "react";
import { testimonials } from "@/data/testimonials";
import StarRateIcon from "@mui/icons-material/StarRate";
export default class Testimonials extends Component {
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
    const styles2 = {
      backgroundImage: `url('/banner15.jpg')`,
      backgroundSize: "cover",
    };

    return (
      <div>
        <div className="bg-fixed bg-cover bg-center pb-7" style={styles2}>
          <div className="flex flex-col justify-center items-center gap-5 pt-16 ">
            <h1 className=" text-primary font-sans text-sm font-medium text-center ">
              TESTIMONIALS
            </h1>
            <Image
              src="/separator.png"
              alt="spector"
              width={100}
              height={200}
              className="text-center"
            />
            <h1 className=" text-secondary text-center text-3xl font-serif">
              What People Are Saying
            </h1>
          </div>
          <div className="container mx-auto px-6 mt-10">
            <Slider {...settings}>
              {testimonials.map((data, index) => (
                <div key={index}>
                  <div className="p-3 grid bg-bgPrimary h-72 mx-3 rounded-lg">
                    <div className="text-primary flex items-start text-sm">
                      {[1, 2, 3, 4, 5].map((item, key) => (
                        <StarRateIcon key={index} />
                      ))}
                    </div>

                    <p className="text-gray-400 text-sm font-mono text-start mt-2 items-center">
                      {data.testimonial}
                    </p>
                    <div className="flex gap-3 justify-start items-end mt-5 align-bottom">
                      <div>
                        <Image
                          src={`${data.image}`}
                          alt="spector"
                          width={100}
                          height={200}
                          className="h-14 w-14 rounded-full"
                        />
                      </div>
                      <div>
                        <h1 className="text-secondary tracking-wider font-sans mt-5 text-md">
                          {data.name}
                        </h1>
                        <h1 className="text-primary text-sm">{data.address}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
