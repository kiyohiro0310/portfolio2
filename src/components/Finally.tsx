import React from "react";

const Finally = () => {
  return (
    <div className="absolute top-[950vh] left-0 sm:left-[60vw] w-screen h-fit px-12 py-64 rounded-3xl z-10">
      <img
        className="absolute -z-10 bottom-36 right-10 sm:hidden block"
        src="./img/leaf.png"
        alt="leaf"
        width={180}
      />
      <h1 className="flex items-center justify-start text-3xl font-bold pb-24 space-x-4">
        <div className="w-[5px] h-[25px] bg-mainDeepGreen"></div>
        <p>FINALLY</p>
      </h1>
      <div className="w-full sm:w-[30vw] space-y-24">
        <p>Thank you for seeing this site till the end!</p>
        <p>
          Remember, there is no way to call do over, so what are you waiting
          for!
        </p>
        <p>Let&apos;s hit it!</p>
      </div>
      <p className="absolute bottom-0 sm:bottom-4 right-4 sm:left-4 text-[16px]">
        &copy; 2024 Kiyohiro Kambayashi
      </p>
    </div>
  );
};

export default Finally;
