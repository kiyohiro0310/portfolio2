import React from "react";

const AboutMe = () => {
  return (
    <div className="absolute top-[190vh] left-0 sm:left-[60vw] w-[100vw] h-fit bg-mainGreen bg-opacity-90 px-12 py-48 pb-80 rounded-3xl">
      <div className="sm:w-[30vw] space-y-24 ">
        <h1 className="flex items-center justify-start text-3xl font-bold pb-24 space-x-4">
          <div className="w-[5px] h-[25px] bg-mainDeepGreen"></div>
          <p>ABOUT ME</p>
        </h1>
        <div>
          <h1 className="text-2xl font-bold pb-5">
            I&apos;m Kiyo! Glad of you to visit here!
          </h1>
          <div>
            I&apos;m currently enrolled Bachelor of Information and
            Communications Technology at Western Sydney University.
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold pb-5">
            DevOps and FullStack Developer
          </h1>
          <div>
            I&apos;m keen to be a developer who can take care of both DevOps and
            Fullstack side in order to help/support business process.
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold pb-5">Choices and Consequences</h1>
          <div>
            It takes time to learn technology but some actions are much more
            worse than no action. I believe choice and consistency will deliver
            the great consequences.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
