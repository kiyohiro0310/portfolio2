import React, { useEffect } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/all";

gsap.registerPlugin(MotionPathPlugin);

const Loading = () => {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.7 });

    gsap.set(".leaf", { x: 30, y: -100 });
    tl.to(".leaf", {
        motionPath: [{x: -10, y:-60}, {x: -50, y: -50}],
        ease: "power1.out",
        rotationX: 180

    });
    tl.to(".leaf", {
        motionPath: [{x: -20, y: -30}, {x: 0, y: 0}],
        ease: "power1.out",
        delay: 0.2,
    });
  }, []);

  return (
    <section className="h-screen w-screen bg-yellow-100 flex justify-center items-center">
      <div>
        <img className="leaf" src="./img/leaf.png" alt="leaf" width={33} />
      </div>
    </section>
  );
};

export default Loading;
