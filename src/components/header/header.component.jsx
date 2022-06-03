import React, { useState } from "react";

const Header = () =>{ 
  const [toggle,setToggle] = useState(false)
  const handleClick=()=>{
     setToggle(toggle=>!toggle)
     console.log(toggle)
  }
  return (
  <nav className="relative container mx-auto p-6">
    <div className="flex items-center justify-between">
      <div className="pt-2">
        <img
          src="https://res.cloudinary.com/dmar6wa9y/image/upload/v1654164056/logo_u5x0xl.svg"
          alt="manage logo"
        />
      </div>
      <div className="hidden  space-x-6 lg:flex">
        <a href="#" className="hover:text-darkGrayishBlue">
          Pricing
        </a>
        <a href="#" className="hover:text-darkGrayishBlue">
          Product
        </a>
        <a href="#" className="hover:text-darkGrayishBlue">
          About Us
        </a>
        <a href="#" className="hover:text-darkGrayishBlue">
          Careers
        </a>
        <a href="#" className="hover:text-darkGrayishBlue">
          Community
        </a>
      </div>
      <a
        href="#"
        className="hidden  p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight lg:block"
      >
        {" "}
        Get Started
      </a>
      {/* hamburger-icon */}
      <button id="menu-btn" onClick={handleClick} className={`hamburger ${toggle ?'open' :''} lg:hidden focus:outline-none `}>
        <span className="harburger-top"></span>
        <span className="harburger-middle"></span>
        <span className="harburger-bottom"></span>
      </button>
    </div>
    {/* mobile-menu */} 
    <div className="lg:hidden">
      <div id="menu" className={`absolute ${toggle ? 'flex' : 'hidden'} flex-col items-center self-end  py-8 mt-10 space-y-6 font-bold bg-white sm:auto sm:self-center left-6 right-6 drop-shadow-md `}>
        <a href="#">Pricing</a>
        <a href="#">Products</a>
        <a href="#">About Us</a>
        <a href="#">Careers</a>
        <a href="#">Community</a>
      </div>
    </div>
  
  </nav>
)};
export default Header;
