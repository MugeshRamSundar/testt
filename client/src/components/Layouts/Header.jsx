import React from "react";
import Button from "../utils/Button";
import NavItems from "./NavItems";

const Header = ({ id }) => {
  return (
    <>
      <header className="w-screen">
        <div className="h-16 bg-gray-200 flex justify-between shadow-md">
          <img
            src="https://cdn.pixabay.com/photo/2013/02/12/09/07/microsoft-80658_1280.png"
            alt="logo"
            className="h-16 w-30 my-auto ml-5 rounded-md cursor-pointer"
          />
          <NavItems id={id} />
          <div className="my-auto mr-7">
            <Button name="Get Started" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
