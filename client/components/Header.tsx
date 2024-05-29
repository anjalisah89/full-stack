import React from "react";

const Header = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Booking</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">Bookings</a>
            <a className="mr-5 hover:text-gray-900">Blogs</a>
            <a className="mr-5 hover:text-gray-900">About</a>
            <a className="mr-5 hover:text-gray-900">Contact Us</a>
          </nav>
          <button className="flex text-white bg-purple-500 border-0 py-2 px-5 focus:outline-none hover:bg-purple-600 rounded">
            My Account
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
