import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import DP from "@/app/public/banner_bg.jpg"

const Hero = () => {
    return (
        
        <section className="text-gray-600 body-font">
            <Navbar />
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font lg:text-6xl text-6xl mb-4 font-large text-gray-900 text-lg">
        <b>Hi, I'm</b>
        <br className="hidden lg:inline-block" />
        <b>Eraj Naz</b>
      </h1>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded size-25"
        alt="hero"
        src={DP}
      />
    </div>
  </div>
</section>

    )
}

export default Hero