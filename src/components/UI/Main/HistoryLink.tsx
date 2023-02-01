import React, { useState } from "react";
import "./HistoryLink.css";
import { MdContentCopy } from "react-icons/md";
import { BsArrowReturnRight, BsCheckCircle } from "react-icons/bs";

function HistoryLink(props: {
  link: string;
  slug: string;
  setToasty: (arg0: string) => void;
}) {
  const [copyAnimation, setCopyAnimation] = useState(false);

  const onCopyLink = async () => {
    setCopyAnimation(true);
    await navigator.clipboard.writeText(props.slug);
    props.setToasty("Linked Copied!");
    setTimeout(() => {
      setCopyAnimation(false);
    }, 1500);
  };

  return (
    <div className="w-full flex transition duration-200 hover:bg-green-200">
      <div className="w-[80%] md:w-[90%]">
        <div className=" flex pt-4 px-3 text-blue-600 font-semibold">
          <a href={props.slug} target="_blank">
            {props.slug}
          </a>
        </div>
        <div className="flex justify-center items-center pl-2 h-10 text-xs pt-2 pb-2 gap-1  text-stone-500 md:text-base md:pl-4">
          <div className="w-[25px]  flex justify-center items-center h-full">
            <BsArrowReturnRight />
          </div>
          <div className="w-[95%]   whitespace-nowrap text-ellipsis overflow-hidden">
            {props.link}
          </div>
        </div>
      </div>
      <button
        className={`w-[20%]  relative text-2xl flex items-center justify-center transition duration-300 hover:bg-green-500 md:w-[10%]`}
        onClick={onCopyLink}
      >
        <div
          className={`absolute transtition duration-200 ${
            copyAnimation ? "opacity-100" : "opacity-0"
          }`}
        >
          <BsCheckCircle />
        </div>
        <div
          className={`absolute transtition duration-200 ${
            copyAnimation ? "opacity-0" : "opacity-100"
          }`}
        >
          <MdContentCopy />
        </div>
      </button>
    </div>
  );
}

export default HistoryLink;
