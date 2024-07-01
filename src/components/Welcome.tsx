
import gsap from "gsap";
import { useEffect } from "react";

const buttonClass =
  "px-4 py-2 bg-mainGreen font-bold rounded-lg hover:bg-mainDeepGreen hover:text-white transition duration-300";

const Welcome = ({langHandler}: {langHandler: (isJapanese: boolean, isEnglish: boolean) => void}) => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.set(".text1", {
      y: 20,
      opacity: 0,
    });
    tl.set(".text2", {
      y: 20,
      opacity: 0,
      display: "none",
    });
    tl.set(".button-group", {
      y: 20,
      opacity: 0,
    });
    tl.to(".text1", {
      y: 0,
      opacity: 1,
      duration: 1,
    });
    tl.to(".text1", {
      opacity: 0,
      duration: 1,
      display: "none",
    });
    tl.to(".text2", {
      y: 0,
      opacity: 1,
      duration: 1,
      display: "block",
      delay: 0.3,
    });
    tl.to(".text2", {
      y: -60,
      delay: 0.3,
    });

    tl.to(".button-group", {
      y: 0,
      opacity: 1,
      duration: 1,
    });
  }, []);

  return (
    <div className="absolute z-10 w-screen h-screen flex flex-col justify-center items-center">
      <p className="text1 text-3xl text-center">
        Hi, there! Thank you for visiting my page!
      </p>
      <p className="text2 text-3xl text-center">First of all, which language do you use?</p>
      <div className="button-group flex space-x-6 items-center justify-center">
        <button onClick={() => langHandler(false, true)} className={buttonClass}>
          English
        </button>
        <button onClick={() => langHandler(true, false)} className={buttonClass}>
          日本語
        </button>
      </div>
    </div>
  );
};

export default Welcome;
