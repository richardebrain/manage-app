import React from "react";

const Header = () => (
  <nav className="relative container mx-auto p-6">
    <div className="flex items-center justify-between">
      <div className="pt-2">
        <img src="../../src/images/logo.svg" alt="manage logo" />
      </div>
      <div className="hidden  space-x-6 lg:flex">
        <a href="#" className="hover:text-darkGrayishBlue">Pricing</a>
        <a href="#" className="hover:text-darkGrayishBlue">Product</a>
        <a href="#" className="hover:text-darkGrayishBlue">About Us</a>
        <a href="#" className="hover:text-darkGrayishBlue">Careers</a>
        <a href="#" className="hover:text-darkGrayishBlue">Community</a>
      </div>
      <a href="#" className="hidden  p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"> Get Started</a>
    </div>
    </nav>
);
export default Header;
