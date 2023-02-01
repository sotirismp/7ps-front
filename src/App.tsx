import { useState, useEffect } from "react";
import MainContent from "./components/UI/Main/MainContent";
import Navbar from "./components/UI/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/UI/Footer/Footer";

export type Link = {
  link: string;
  slug: string;
};

let init = true;

function App() {
  const [links, setLinks] = useState<Link[]>([]);
  const [isDark, setIsDark] = useState(true);

  const addLink = (link: Link) => {
    setLinks((links) => [link, ...links]);
    localStorage.setItem("links", JSON.stringify([link, ...links]));
  };

  const toggleTheme = () => {
    setIsDark((p) => !p);
  };

  useEffect(() => {
    if (init) {
      init = false;
      let links = localStorage.getItem("links");
      if (links) setLinks(JSON.parse(links));
    }
  }, [links]);

  const LINKS: Link[] = [];

  const setToasty = (message: string) => {
    toast(message, {
      icon: "✅",
      autoClose: 1000,
      hideProgressBar: true,
      style: {
        borderRadius: "10px",
      },
    });
  };

  return (
    <div
      className={`flex transition duration-200 flex-col items-center h-screen w-screen ${
        isDark ? "bg-slate-800" : "bg-gray-200"
      }  text-black font-monteserrat`}
    >
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      <div className="flex flex-col w-[90%] lg:w-[80%]">
        <MainContent setToasty={setToasty} links={links} addLink={addLink} />
      </div>
      <Footer isDark={isDark} />
      <ToastContainer />
    </div>
  );
}

export default App;
