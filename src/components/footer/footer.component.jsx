import React from "react";

const Footer = () => {
  return (
    <footer className="bg-veryDarkBlue">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div
          id="logoAndLink"
          className="flex flex-col-reverse  items-center justify-between space-y-12 lg:flex-col lg:space-y-0 lg:items-start"
        >
          <div className="mx-auto my-6 text-center text-darkGrayishBlue lg:hidden">
            copyright &copy; 2022, All Rights Reserved
          </div>
          <div className="Logo ">
            <img
              src="https://res.cloudinary.com/dmar6wa9y/image/upload/v1654218768/logo-white_nodvdn.svg"
              alt="company logo"
              className="h-8"
            />
          </div>
          <div className="link flex justify-center space-x-4">
            <a href="#">
              <img
                src="https://res.cloudinary.com/dmar6wa9y/image/upload/v1654164054/icon-facebook_ytohbk.svg"
                alt="facebook"
                className="h-8"
              />
            </a>
            <a href="#">
              <img
                src="https://res.cloudinary.com/dmar6wa9y/image/upload/v1654164056/icon-youtube_ia2ys5.svg"
                alt="youtube"
                className="h-8"
              />
            </a>
            <a href="https://www.twitter.com/richardebrain">
              <img
                src="https://res.cloudinary.com/dmar6wa9y/image/upload/v1654164056/icon-twitter_zqppor.svg"
                alt="twitter"
                className="h-8"
              />
            </a>
            <a href="#">
              <img
                src="https://res.cloudinary.com/dmar6wa9y/image/upload/v1654164056/icon-pinterest_r1t7cf.svg"
                alt="pin Interest"
                className="h-8"
              />
            </a>
            <a href="#">
              <img
                src="https://res.cloudinary.com/dmar6wa9y/image/upload/v1654164055/icon-instagram_xk1clh.svg"
                alt="instagram"
                className="h-8"
              />
            </a>
          </div>
        </div>
        <div className="list-container flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">
              Home
            </a>
            <a href="#" className="hover:text-brightRed">
              Pricing
            </a>
            <a href="#" className="hover:text-brightRed">
              Products
            </a>
            <a href="#" className="hover:text-brightRed">
              About Us
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">
              Careers
            </a>
            <a href="#" className="hover:text-brightRed">
              Community
            </a>
            <a href="#" className="hover:text-brightRed">
              Privacy Policy
            </a>
          </div>
        </div>
        <div id="input-container" className="flex flex-col justify-between ">
          <form >
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none "
                placeholder="updates in your inbox"
              />
              <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-darkGrayishBlue lg:block">
            copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
