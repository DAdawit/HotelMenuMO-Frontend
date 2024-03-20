"use client";
import Hero from "@/components/About/Hero";
import Testimonials from "@/components/About/Testimonials";
import WhoWeAre from "@/components/About/WhoWeAre";
import MoveToTop from "@/components/Home/MoveToTop";
import React from "react";

const page = () => {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section>
        <WhoWeAre />
      </section>
      <section>
        <Testimonials />
      </section>
      <MoveToTop />
    </div>
  );
};

export default page;
