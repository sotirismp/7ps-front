import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

function Footer(props: { isDark: boolean }) {
  return (
    <></>
    // <div
    //   className={`absolute top-0 transition duration-200 right-0 flex justify-end gap-2 pt-5 lg:gap-4 px-5 lg:px-20 text-3xl md:text-4xl md:pb-10 ${
    //     props.isDark ? "text-white" : "text-black"
    //   }`}
    // >
    //   <a
    //     className="hover:text-green-600  "
    //     href="https://github.com/sotirismp"
    //     target="_blank"
    //   >
    //     <AiFillGithub />
    //   </a>
    //   <a
    //     className="hover:text-green-600 "
    //     href="https://linkedin.com/in/swthrhsmp"
    //     target="_blank"
    //   >
    //     <AiFillLinkedin />
    //   </a>
    //   <a
    //     className="hover:text-green-600 "
    //     href="mailto:sotirismpalas@gmail.com"
    //   >
    //     <AiFillMail />
    //   </a>
    // </div>
  );
}

export default Footer;
