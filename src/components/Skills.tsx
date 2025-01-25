import React from "react";


const Skills = () => {
  return (
    <div id="skills" className="container pt-36">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-5xl md:text-6xl text-left justify-left pb-4">My Skills</h2>
          <p className="pt-3 pb-4 text-left justify-left">
          I have a solid foundation in web development, specializing in HTML, CSS, and JavaScript.
          My experience extends to using frameworks like React and Next.js to create dynamic and
          user-friendly applications.
          </p>
        </div>

        <div>
          <div className="grid grid-cols-2 text-3xl sm:text-4xl pt-3 pb-4">
            <div className="space-y-2">
              <a className="space-y-5 flex gap-2 text-orange-600"><b className="text-black">HTML</b></a>
              <a className="space-y-5 flex gap-2 text-blue-600"> <b className="text-black">CSS</b></a>
              <a className="space-y-5 flex gap-2 text-blue-600"> <b className="text-black">TypeScript</b></a>
            </div>
            <div className="space-y-2">
              <a className="space-y-5 flex gap-2 text-blue-600"> <b className="text-black">React.js</b></a>
              <a className="space-y-5 flex gap-2 text-black"> <b className="text-black">Next.js</b></a>
              <a className="space-y-5 flex gap-2 text-blue-600"><b className="text-black">Tailwind</b></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills
