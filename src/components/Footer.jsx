import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm">
        <div>
          <img src={assets.logo} alt="" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ad
            provident voluptatum consectetur et tempore nemo, minus mollitia
            nesciunt? Possimus impedit vel autem dignissimos nostrum placeat sit
            iusto consequatur ullam?
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-300">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-400">
            <li>+234-90-234-2134</li>
            <li>
              <a href="mailto:support@example.com" className="text-gray-600">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full">
        <hr />
        <p className="py-5 text-sm text-center mx-auto">
          Copyright 2025&copy; forever.com - All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
