import React from "react";

const FirstContent = () => (
  <main id="sections">
    <section id="hero">
      <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
        <div className=" flex flex-col mb-32px spae-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            Bring everyone together to build better products
          </h1>
          <p className=" max-w-sm  text-darkGrayishBlue mt-5 text-center md:text-left">
            manage makes it simple for software teams to plan day-to-day tasks
            while keping the larger teams goals in view.
          </p>
          <div className="flex justify-center md:justify-start mt-10">
            <a
              href="#"
              className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
            >
              Get Started
            </a>
          </div>
        </div>

        <div className="md:w-1/2">
          <img src="../../src/images/illustration-intro.svg" alt="" />
        </div>
      </div>
    </section>
    <section id="features">
      <div className="container flex flex-col px-4 mt-20 spae-y-12 md:space-y-0 md:flex-row">
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="mzx-w-md text-4xl font-bold text-center md:text-left">
            What's different about Manage?
          </h2>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage provide all the functionality your team needs,without the
            complexity, our software is tailor-made for modern product teams.
          </p>
        </div>
        <div className="flex flex-col space-y-8 md:w-1/2">
          {/* item one container */}
          <div className="flex flex-col spce-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            {/* item-one heading */}
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                .px-4.p
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
);
export default FirstContent;
