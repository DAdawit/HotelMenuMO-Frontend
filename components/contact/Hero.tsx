"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="overflow-x-hidden bg-[#171819]">
      <div className="h-96 w-screen relative">
        <Image
          src="/contact.jpg"
          alt="spector"
          fill
          className="w-screen h-96 object-cover brightness-50"
          blurDataURL="/bannerAbout.jpg"
        />
      </div>
      <div className="absolute top-1/3 w-full">
        <div className="flex flex-col justify-center ">
          <Image
            src="/delici2.png"
            alt="spector"
            width={150}
            height={100}
            className="self-center object-contain"
          />
          <h1 className="text-center text-primary font-serif text-lg font-bold tracking-widest mt-10">
            ANY QUERY ?
          </h1>
          <Image
            src="/separator.png"
            alt="spector"
            width={100}
            height={200}
            className="self-center"
          />
          <div className="text-white content-center flex flex-col justify-center">
            <h1 className="text-4xl sm:text-6xl text-center  font-serif mt-2 tracking-wide	">
              Contact Us
            </h1>
          </div>
        </div>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-3 px-5  py-10">
        <div className="grid">
          <h1 className="text-gray-200 font-medium text-center text-xl font-sans mb-3 ">
            Lunch Time
          </h1>
          <h3 className="text-gray-300 font-medium text-center ">
            Monday to Sunday
          </h3>
          <h3 className="text-gray-300 font-medium text-center ">
            11.00 am - 2.30pm
          </h3>
        </div>
        <div className="grid">
          <h1 className="text-gray-200 font-medium text-center text-xl font-sans mb-3 ">
            Contact Info
          </h1>
          <h3 className="text-gray-300 font-medium text-center ">
            Restaurant St, Delici City, London 9578, UK
          </h3>
          <h3 className="text-gray-300 font-medium text-center ">
            Email : booking@domainname.com
          </h3>
          <h2 className="font-medium text-center text-primary mt-2">
            Booking : +88-123-123456
          </h2>
        </div>
        <div className="grid">
          <h1 className="text-gray-200 font-medium text-center text-xl font-sans mb-3 ">
            Dinner Time
          </h1>
          <h3 className="text-gray-300 font-medium text-center ">
            5.30 pm - 11.30 pm
          </h3>
          <h3 className="text-gray-300 font-medium text-center ">
            Monday to Sunday
          </h3>
        </div>
      </section>

      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 px-10 py-10 mt-16 gap-8 bg-black mb-10">
        <div>
          <h1 className="text-center font-sans text-4xl text-gray-100 font-bold tracking-wider">
            Message us
          </h1>
          <p className="text-center font-mono text-lg text-gray-200 tracking-wide mt-5 px-5">
            Have a question about the our service? We&apos;re here to help,
            contact us today
          </p>
          <form className="grid gap-y-3">
            <input
              type="text"
              className="h-10 outline-none font-sans text-lg px-3"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="h-10 outline-none font-sans text-lg px-3"
              placeholder="Your Email"
            />
            <input
              type="number"
              className="h-10 outline-none font-sans text-lg px-3"
              placeholder="Phone Number"
            />
            <textarea
              name=""
              id=""
              cols={25}
              rows={8}
              className="outline-none  font-sans text-lg px-3"
              placeholder="Special Request"
            ></textarea>
            <button className="bg-primary font-medium text-black mt-3 px-5 py-4 hover:border-2 hover:bg-black hover:text-primary transition-all font-sans tracking-wider">
              Send your message
            </button>
          </form>
        </div>
        <div>
          <Image
            src="/hotel.jpg"
            alt="spector"
            width={2000}
            height={2000}
            className="text-center h-80 md:h-[93vh] w-full object-cover object-center"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
