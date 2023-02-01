import React from "react";
import HistoryLink from "./HistoryLink";
import { Link } from "../../../App";

function HistoryLinks(props: {
  setToasty: (arg0: string) => void;
  links: Link[];
}) {
  return (
    <>
      {props.links.length > 0 && (
        <div className="flex flex-col  items-center mt-10 rounded-md w-[90%] max-h-[294px] md:w-[60%] bg-white">
          <div className="self-start p-3 font-extrabold text-lg border-b-2 w-full ">
            Previous Links
          </div>
          <div className="overflow-y-scroll w-full on-scrollbar">
            {props.links.map((link) => (
              <HistoryLink
                link={link.link}
                slug={link.slug}
                setToasty={props.setToasty}
                key={link.slug}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default HistoryLinks;
