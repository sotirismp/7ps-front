import React, { useState, useRef } from "react";
import HistoryLinks from "./HistoryLinks";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { Link } from "../../../App";
import { MdAddLink } from "react-icons/md";
import { MdContentCopy } from "react-icons/md";

var regex = new RegExp(
  /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-zA-Z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
);

const alphabet = "abcdefghijklmnopqrstuvwxyz";

function MainContent(props: {
  setToasty: (arg0: string) => void;
  links: Link[];
  addLink: (arg0: Link) => void;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isFetched, setIsFetched] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [error, setError] = useState("");

  const toggleInputState = () => {
    setError("");
    setIsInputFocused((p) => !p);
  };
  const inputOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      buttonHadler();
    }
  };
  const onChangeInput = () => {
    setIsFetched(false);
    setError("");
  };

  const buttonHadler = async () => {
    if (isFetched) {
      props.setToasty("Linked Copied!");
      await navigator.clipboard.writeText(inputRef.current!.value);
      inputRef.current!.value = "";
      setIsFetched(false);
      return;
    }

    if (regex.test(inputRef.current!.value)) {
      buttonRef.current!.blur();
      setIsLoading(true);

      try {
        const response = await fetch("/api/create", {
          method: "POST",
          body: JSON.stringify({ url: inputRef.current!.value }),
          headers: { "content-type": "application/json" },
        });

        if (!response.ok || response.status !== 200) {
          setError(`Server it's not working right now`);
          setIsLoading(false);
          return;
        }

        let unparsedURL = await response.text();
        var slug = unparsedURL.substring(1, unparsedURL.length - 1);

        setIsLoading(false);

        const data: Link = {
          link: inputRef.current!.value,
          slug: `https://7ps.xyz/${slug}`,
        };

        props.addLink({ ...data });
        inputRef.current!.value = data.slug;

        setIsFetched(true);
      } catch (error) {
        setError(`Something went wrong`);
      }
    } else {
      setError("Enter a valid URL");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-2 md:mt-10">
      <div className="flex flex-col select-none justify-center items-center text-4xl pb-6 font-extrabold tracking-wider text-green-500 md:text-6xl md:pb-10">
        <div>{"</>"}</div>
        <div className="">7ps.XYZ</div>
        <div className=" text-sm pt-4">Shorten ur link..</div>
      </div>
      <div
        className={`flex justify-center text-black w-[90%] md:w-[60%] `}
        onBlur={toggleInputState}
        onFocus={toggleInputState}
      >
        <input
          placeholder="Enter your link.."
          disabled={isLoading}
          ref={inputRef}
          className={`w-full h-12 p-3 placeholder-gray-500 outline-0 rounded-l-lg  border-r-0 transition duration-200 bg-slate-300 ${
            isLoading ? "disabled:bg-stone-300" : ""
          } ${
            isInputFocused
              ? "border-green-500 border-2 "
              : " border-white border-2"
          } ${
            error.length > 0 ? "border-red-500 border-2 " : ""
          }focus:outline-none`}
          onKeyDown={inputOnKeyDown}
          onChange={onChangeInput}
          type="text"
        ></input>
        <button
          ref={buttonRef}
          disabled={isLoading}
          className={`w-[100px] flex justify-center bg-white items-center relative  rounded-r-lg text-2xl transition duration-200 border-l-0 hover:bg-green-500  hover:border-green-500 hover:border-2 hover:border-l-0 ${
            isLoading ? "disabled:bg-stone-300" : ""
          } ${
            isInputFocused
              ? "border-green-500 border-2 "
              : "border-white border-2"
          } ${error.length > 0 ? "border-red-500 border-2 " : ""}`}
          onClick={buttonHadler}
        >
          {isLoading && (
            <AiOutlineLoading3Quarters className="absolute animate-spin" />
          )}
          {!isLoading && isFetched && <MdContentCopy className="absolute" />}

          {!isLoading && !isFetched && <FiSend className="absolute" />}
        </button>
      </div>
      {error.length > 0 && (
        <div className="mt-5 bg-red-200 rounded-md py-2 text-center font-semibold text-red-500 w-[90%] md:w-[60%]">
          {error}
        </div>
      )}
      <HistoryLinks setToasty={props.setToasty} links={props.links} />
    </div>
  );
}

export default MainContent;
