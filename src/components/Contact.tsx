import { MdOutlineAttachEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import React from "react";


const Contact = () => {
  return (
    <>
    <div id="contact" className="container pt-36">
      <section className="text-black body-font relative">
  <div className="absolute inset-0 bg-[172, 235, 213]">
   <h1 className="font-large text-5xl md:text-left items-center text-center pb-7 pt-12">Get In Touch</h1>
   <p className="text-gray-600 text-2xl">Drop me a line. give me a call or send me a message by submitting the from</p>
   <h3 className="flex pt-12 pb-9 gap-1 text-2xl"> <MdOutlineAttachEmail /> eraj.1234.naz@gmail.com</h3>
   <h3 className="flex pt-6 pb-7 gap-1 text-2xl"> <FaPhoneVolume /> 03491942771</h3>
   <h3 className="flex pt-6 pb-7 gap-1 text-2xl"> <FaFacebookSquare /> Eraj Naz Shaikh </h3>
  </div>
  <div className="container px-5 py-24 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 bg-gray-600 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
    <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-white">
          Name
        </label>
        <input
          type="name"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-white">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Button
      </button>
    </div>
  </div>
</section>
    </div>
    </>
  )
}

export default Contact





