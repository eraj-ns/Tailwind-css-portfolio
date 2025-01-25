import React from "react";
import Image from "next/image";
import P1 from "@/app/public/project1.png"
import P2 from "@/app/public/project2.png"
import P3 from "@/app/public/project3.png"

const data = () => {
  return (
    <section className="text-gray-600 body-font">
      <p className="justify-center text-center text-4xl pt-7 pb-6 text-black"><b>My Projects</b></p>
  <div className="container px-6 py-26 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-black">
          < Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={P1}
            alt="blog"
          />
          <div className="p-7 space-y-1">
            <h2 className="tracking-widest text-lg title-font font-large text-white mb-1">
            <b>Static Resume Builder</b>
            </h2>
            <h1 className="title-font text-md font-medium text-white mb-3">
            Static Resume Builder create for Html, Css, Node, Typescript 
            </h1>
            <h3 className="leading-relaxed mb-3 text-white size-1 text-xs md:flex flex-row">
            HTML
            CSS 
            Node 
            Typescript
            </h3>
            <div className="flex items-center flex-wrap ">
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-black">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={P2}
            alt="blog"
          />
          <div className="p-7 space-y-1">
            <h2 className="tracking-widest text-lg title-font font-large text-white mb-1">
              <b>Dynamic Resume Builder</b>
            </h2>
            <h1 className="title-font text-md font-medium text-white mb-3">
            Dynamic Resume Builder create for Html, Css, Node, Typescript
            </h1>
            <h3 className="leading-relaxed mb-3 text-white size-1 text-xs md:flex flex-row">
            HTML 
            CSS  
            Node 
            Typescript
            </h3>
            <div className="flex items-center flex-wrap">
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-black">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={P3}
            alt="blog"
          />
          <div className="p-7 space-y-1">
            <h2 className="tracking-widest text-lg title-font font-large text-white mb-1">
             <b>Blog Website</b>
            </h2>
            <h1 className="title-font text-md font-medium text-white mb-3">
              Blog Website create for Html, Css, Node, Typescript, Next.js
            </h1>
            <h3 className="leading-relaxed mb-3 text-white size-1 text-xs md:flex flex-row">
            HTML 
            CSS 
            Node 
            Typescript 
            Next.js
            </h3>
            <div className="flex items-center flex-wrap ">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default data


