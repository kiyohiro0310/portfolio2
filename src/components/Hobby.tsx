import React from "react";

const Hobby = () => {
  return (
    <div className="absolute top-[760vh] left-0 sm:left-[60vw] w-screen sm:w-[35vw] px-12 py-48 pb-80 space-y-12 backdrop-blur-md sm:bg-transparent bg-opacity-90 rounded-3xl">
        <h1 className="flex items-center justify-start text-3xl font-bold pb-24 space-x-4">
          <div className="w-[5px] h-[25px] bg-mainDeepGreen"></div>
          <p>WORK LIFE BALANCE</p>
        </h1>
        <div className="space-y-20">
          <p>
            I focus on work life balance as high prioritised target. We don&apos;t eat for work but work for eat, right?
          </p>
          <p>
            Without haste but without rest. I spend most of time for learning technology. It&apos;s fun.
          </p>
        </div>
    </div>
  );
};

export default Hobby;
