import React from "react";

const Experience = () => {
  return (
    <div className="absolute top-[380vh] sm:left-[10vw] w-screen sm:w-96 px-12 py-48 space-y-12 bg-[#E4C59E] sm:bg-transparent bg-opacity-90 rounded-xl">
        <h1 className="flex items-center justify-start text-3xl font-bold pb-24 space-x-4">
          <div className="w-[5px] h-[25px] bg-mainDeepGreen"></div>
          <p>WORKS</p>
        </h1>

      <div className="divide-y-2 py-2">
        <h1 className="text-xl font-semibold">SK Morters</h1>
        <div className="py-2 space-y-1">
          <div>
            <h2 className="font-semibold">Years:</h2>
            <p className="pl-2">2 years</p>
          </div>
          <div>
            <h2 className="font-semibold">Address</h2>
            <p className="pl-2">
              Japan, Saitama, Koshigaya, Shichizacho, 6-6-2
            </p>
          </div>
          <div>
            <h2 className="font-semibold">Role</h2>
            <p className="pl-2">FullStack Developer</p>
          </div>
          <div>
            <h2 className="font-semibold">Experience</h2>
            <ol className="pl-2">
              <li>Estimate the development plan</li>
              <li>Design the UI</li>
              <li>Implementation</li>
              <li>Testing</li>
              <li>DevOps</li>
            </ol>
          </div>
          <div>
            <h2 className="font-semibold">Technology</h2>
            <div className="flex space-x-2 pl-2">
              <img src="./skills/typescript.png" alt="logo" width={30} />
              <img src="./skills/nextjs1.png" alt="logo" width={30} />
              <img src="./skills/mongodb.svg" alt="logo" width={30} />
              <img src="./skills/tailwind.png" alt="logo" width={30} />
              <img src="./skills/github.png" alt="logo" width={30} />
              <img src="./skills/vercel.svg" alt="logo" width={30} />
            </div>
          </div>
        </div>
      </div>

      <div className="divide-y-2 py-4">
        <h1 className="text-xl font-semibold">Postgraduate Transformations</h1>
        <div className="py-2 space-y-1">
          <div>
            <h2 className="font-semibold">Years:</h2>
            <p className="pl-2">1.5 years</p>
          </div>
          <div>
            <h2 className="font-semibold">Address</h2>
            <p className="pl-2">Western Sydney University Kingswood</p>
          </div>
          <div>
            <h2 className="font-semibold">Role</h2>
            <p className="pl-2">FullStack Developer</p>
            <p className="pl-2">DevOps Developer</p>
          </div>
          <div>
            <h2 className="font-semibold">Experience</h2>
            <ol className="pl-2">
              <li>Fullstack chatbot application</li>
              <li>Admin web server</li>
              <li>Manage CICD pipeline</li>
              <li>UI implementation</li>
              <li>Manipulate docker container</li>
              <li>DevOps</li>
            </ol>
          </div>
          <div>
            <h2 className="font-semibold">Technology</h2>
            <div className="space-y-2 pl-2">
              <div className="flex space-x-2">
                <img src="./skills/html.png" alt="logo" width={30} />
                <img src="./skills/css.png" alt="logo" width={30} />
                <img src="./skills/php.png" alt="logo" width={30} />
                <img src="./skills/python.png" alt="logo" width={30} />

                <img src="./skills/tailwind.png" alt="logo" width={30} />
                <img src="./skills/js.png" alt="logo" width={30} />
                <img src="./skills/typescript.png" alt="logo" width={30} />
                <img src="./skills/linux.png" alt="logo" width={30} />
                <img src="./skills/laravel.png" alt="logo" width={30} />
                <img src="./skills/nextjs1.png" alt="logo" width={30} />
              </div>
              <div className="flex space-x-2">
                <img src="./skills/docker.png" alt="logo" width={30} />
                <img src="./skills/mysql.png" alt="logo" width={30} />
                <img src="./skills/mongodb.svg" alt="logo" width={30} />
                <img src="./skills/postgre.png" alt="logo" width={30} />

                <img src="./skills/github.png" alt="logo" width={30} />
                <img src="./skills/openai-2.svg" alt="logo" width={30} />
                <img src="./skills/vercel.svg" alt="logo" width={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
