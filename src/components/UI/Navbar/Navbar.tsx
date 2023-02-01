import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { CiLight, CiDark } from "react-icons/ci";

function Navbar(props: { toggleTheme: () => void; isDark: boolean }) {
  return (
    <div className="w-full  flex items-center justify-between text-3xl md:text-4xl text-white  px-5 h-16 md:h-16 md:px-10">
      <div
        className="relative hover:cursor-pointer  h-10 w-10 flex justify-center items-center"
        onClick={props.toggleTheme}
      >
        <CiLight
          className={`hover:text-green-600 absolute ${
            props.isDark ? " " : "hidden"
          } `}
        />
        <CiDark
          className={`hover:text-green-600 absolute text-black ${
            props.isDark ? "hidden" : ""
          } `}
        />
      </div>
      <div
        className={` transition duration-200 flex justify-end gap-2 lg:gap-4   ${
          props.isDark ? "text-white" : "text-black"
        }`}
      >
        <a
          className="hover:text-green-600  "
          href="https://github.com/sotirismp"
          target="_blank"
        >
          <AiFillGithub />
        </a>
        <a
          className="hover:text-green-600 "
          href="https://linkedin.com/in/swthrhsmp"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>
        <a
          className="hover:text-green-600 "
          href="mailto:sotirismpalas@gmail.com"
        >
          <AiFillMail />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
