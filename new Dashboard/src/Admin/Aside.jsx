/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

// icons
import { SiCircle } from "react-icons/si";
import { FiUsers } from "react-icons/fi";
import { FaHistory } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { BsPerson } from "react-icons/bs";
import { TfiQuoteRight } from "react-icons/tfi";
import { FcAbout } from "react-icons/fc";

export const Aside = () => {
  return (
    <aside id="drawer-navigation" className="fixed top-0 z-50 w-60  h-screen pt-[62px] pb-1 transition-transform -translate-x-full  md:translate-x-0" >
      <div className="overflow-y-auto py-5 px-3 h-full bg-[#191a3e] ">
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/"
              className="flex  items-center gap-2 p-2  w-full text-base font-medium text-white rounded-lg transition duration-75 group hover:bg-[#fff] hover:text-black"
            >
              <SiCircle />
              <span className="mr-3">overview</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className="flex  items-center gap-2 p-2  w-full text-base font-medium text-white rounded-lg transition duration-75 group hover:bg-[#fff] hover:text-black"
            >
              <FiUsers />
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/books"
              className="flex  items-center gap-2 p-2  w-full text-base font-medium text-white rounded-lg transition duration-75 group hover:bg-[#fff] hover:text-black"
            >
              <ImBooks />
              Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/orders"
              className="flex  items-center gap-2 p-2  w-full text-base font-medium text-white rounded-lg transition duration-75 group hover:bg-[#fff] hover:text-black"
            >
              <FaHistory />
              History
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/writers"
              className="flex  items-center gap-2 p-2  w-full text-base font-medium text-white rounded-lg transition duration-75 group hover:bg-[#fff] hover:text-black"
            >
              <BsPerson />
              Writers
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/quotes"
              className="flex  items-center gap-2 p-2  w-full text-base font-medium text-white rounded-lg transition duration-75 group hover:bg-[#fff] hover:text-black"
            >
              <TfiQuoteRight />
              Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="flex  items-center gap-2 p-2  w-full text-base font-medium text-white rounded-lg transition duration-75 group hover:bg-[#fff] hover:text-black"
            >
              <FcAbout />
              About Us
            </NavLink>
          </li>
          
        </ul>
      </div>
    </aside>
  );
};
