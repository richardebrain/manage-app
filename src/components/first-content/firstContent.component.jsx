import React from "react";

const FirstContent = () => (
  <main id="sections">
    <section id="hero" className="container mx-auto">
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
          <img
            src="https://res.cloudinary.com/dmar6wa9y/image/upload/v1654164056/illustration-intro_zawd0z.svg"
            alt=""
          />
        </div>
      </div>
    </section>
    <section id="features" className="container mx-auto">
      <div className="container flex flex-col  px-4 mt-20 spae-y-12 md:space-y-0 md:flex-row">
        <div className="flex flex-col mb-9 space-y-12 md:w-1/2">
          <h2 className="mzx-w-md text-4xl font-bold text-center md:text-left">
            What's different about Manage?
          </h2>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage provide all the functionality your team needs,without the
            complexity, our software is tailor-made for modern product teams.
          </p>
        </div>
        {/* numbered list */}
        <div className="flex flex-col space-y-8 md:w-1/2">
          {/* item one container */}
          <div className="flex flex-col spce-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            {/* item-one heading */}
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2 ">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  01
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  track company-wide progress
                </h3>
              </div>
            </div>
            <div>
              <h3 className=" hidden text-lg font-bold mb-4 md:block">
                Track company-wide progress
              </h3>
              <p className="text-darkGrayishBlue mt-6 leading-7">
                See how your day-to-day tasks fit into the wider vision.Go from
                tracking progress at the milestone levvel all the way done to
                the smallest of details. never lose sight of the bigger picture
                again.
              </p>
            </div>
          </div>
          <div className="flex flex-col spce-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            {/* item-one heading */}
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2 ">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  02
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Advanced built-in reports
                </h3>
              </div>
            </div>
            <div>
              <h3 className=" hidden text-lg font-bold mb-4 md:block">
                {" "}
                Advanced built-in reports
              </h3>
              <p className="text-darkGrayishBlue mt-6 leading-7">
                Set internal delivery estimates and track progress towards
                company goals. Our customisable dashboard helps you build out
                the report you need to keep key stakeholders informed.
              </p>
            </div>
          </div>
          <div className="flex flex-col spce-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            {/* item-one heading */}
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2 ">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  03
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Everything you need in one place
                </h3>
              </div>
            </div>
            <div>
              <h3 className=" hidden text-lg font-bold mb-4 md:block">
                Track company-wide progress
              </h3>
              <p className="text-darkGrayishBlue mt-6 leading-7">
                Stop jumping from one service to another to communicate,store
                files,track tasks and share documents. Manage offers an
                all-in-one team productivity solution
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials" className="container  mx-auto">
      {/* testimonial container */}
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        {/* textimonial header */}
        <h2 className="text-4xl font-bold text-center">
          What's Different About Manage ?
        </h2>
        {/* testimonial */}
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {/* testimonial one */}
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img
              className="w-16 -mt-14"
              src="https://res.cloudinary.com/dmar6wa9y/image/upload/v1654164054/avatar-anisha_cwac8y.png"
              alt="anisha"
            />
            <h5 className="text-lg font-bold">Anisha Li</h5>
            <p className="text-sm text-darkGrayishBlue">
              <q>
                Manage has supercharged our team workflow.The maintain
                visibility on larger milestones at all times keeps everyone
                motivated.
              </q>
            </p>
          </div>
          {/* testimonial 2 */}
          <div className="  hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
            <img
              className="w-16 -mt-14"
              src="https://res.cloudinary.com/dmar6wa9y/image/upload/v1654164054/avatar-ali_mggjj5.png"
              alt="ali"
            />
            <h5 className="text-lg font-bold">Ali Bravo</h5>
            <p className="text-sm text-darkGrayishBlue">
              <q>
                We have been able to cancel so many other subscriptions since
                using manage. There is no more cross channel confusion and
                evertone is much more focused
              </q>
            </p>
          </div>
          {/* testimonial 3 */}
          <div className="hidden  flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
            <img
              className="w-16 -mt-14"
              src="https://res.cloudinary.com/dmar6wa9y/image/upload/v1654164053/avatar-richard_qoldia.png"
              alt="Richard"
            />
            <h5 className="text-lg font-bold">Richard Watts</h5>
            <p className="text-sm text-darkGrayishBlue">
              <q>
                We have been able to cancel so many other subscriptions since
                using manage. There is no more cross channel confusion and
                evertone is much more focused
              </q>
            </p>
          </div>
        </div>
        <div id="img-slider">
          <button className="rounded-full border-2 "></button>
        </div>
        <div className="my-16">
          <a
            href="#"
            className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
    {/* CTA */}
    <section id="cta" className="bg-brightRed mt-32 ">
      <div className=" container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12  md:flex-row md:py-12 md:space-y-0">

        <h2 className="font-bold text-5xl leading-tight text-center text-white md:text-3xl  md:max-w-xl md:text-left lg:text-4xl">Simplify how your team work today.</h2>
        <div className="md:w-48">
          <a
            href="#"
            role="button"
            className="p-3 px-6 pt-2 text-brightRed bg-white shadow-2xl rounded-full baseline hover:bg-gray-300 "
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  </main>
);
export default FirstContent;
