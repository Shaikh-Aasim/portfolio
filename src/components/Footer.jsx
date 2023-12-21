import React from "react";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div className=" h-full w-full bg-gradient-to-b py-12 from-gray-800 to-black">
      <div className="text-center sm:text-left max-w-screen-lg mx-auto flex flex-col items-center justify-center h-20 px-4 md:flex-row md:w-full">
        <div className="w-full sm:w-1/2">

        <h1 className=" text-2xl text-white">Feel free to reach out!</h1>
        </div>

        <div className="text-2xl text-white">
                <p>aasim26112005@gmail.com</p>
            <p>+91 9987353513</p>
            <p>Byculla West Mumbai 400-011.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
