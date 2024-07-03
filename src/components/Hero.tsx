import gsap from "gsap";
import { useEffect } from "react";

const Hero = () => {


  useEffect(() => {
    gsap.set(".name", {
      y: 20,
      opacity: 0
    })
    gsap.set(".role", {
      y: 20,
      opacity: 0
    })
    gsap.set(".edu", {
      y: 20,
      opacity: 0
    })
    gsap.set(".logo1", {
      y: 20,
      opacity: 0
    })
    gsap.set(".logo2", {
      y: 20,
      opacity: 0
    })
    gsap.set(".logo3", {
      y: 20,
      opacity: 0
    })
    gsap.to(".name", {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.4
    })
    gsap.to(".role", {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.5
    })
    gsap.to(".edu", {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.6
    })
    gsap.to(".logo1", {
      y: 0,
      opacity: 1,
      delay: 0.7
    })
    gsap.to(".logo2", {
      y: 0,
      opacity: 1,
      delay: 0.8
    })
    gsap.to(".logo3", {
      y: 0,
      opacity: 1,
      delay: 0.9
    })
  }, []);
  return (
    <div className="absolute w-96 sm:w-[30vw] top-24 left-4 sm:left-32 sm:top-48">
      <h1 className="name text-6xl font-bold uppercase py-4">Kiyohiro Kambayashi</h1>
      <div className="relative top-80 sm:top-0">
        <div className="divide-y-2">
          <div className="role">
            <h1 className="font-bold">Role:</h1>
            <p>Fullstack Developer, DevOps Developer</p>
          </div>
          <div className="edu">
            <h1 className="font-bold pt-4">Education:</h1>
            <p>Western Sydney University</p>
          </div>
          <div></div>
        </div>
        <div className="flex items-center justify-end space-x-3 py-4">
          <a
            href="https://www.linkedin.com/in/kiyohiro-kambayashi-533aa0244/"
            target="_blank"
            rel="linkedin page noreferrer"
            className="logo1"
          >
            <img src="./logo/linkedin.png" alt="linkedin" width={30} />
          </a>
          <a
            href="https://www.instagram.com/kiyohiro0310/"
            target="_blank"
            rel="instagram page noreferrer"
            className="logo1"

          >
            <img src="./logo/instagram.png" alt="instagram" width={30} />
          </a>
          <a
            href="https://github.com/kiyohiro0310"
            target="_blank"
            rel="github page noreferrer"
            className="logo3"
          >
            <img
              className="bg-white rounded-lg"
              src="./logo/github.png"
              alt="github"
              width={30}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
