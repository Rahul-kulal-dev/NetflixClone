import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { API_END_POINTS } from "../utils/constants";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { setUsers } from "../redux/userSlice";
import { setToggleValue } from "../redux/movieSlice";

function Header() {
  const user = useSelector((state) => state.app.user);
  const toggle = useSelector((state) => state.movieApp.toggle);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINTS}/logout`);
      toast.success(res.data.message);
      dispatch(setUsers(null));
      localStorage.removeItem('user');
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Logout failed");
    }
  };

  const toggleHandler = () => {
    dispatch(setToggleValue());
    setMenuOpen(false);
  };

  return (
    <header className="z-[999999] relative w-full p-3 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white flex justify-between items-center px-6 md:px-12 shadow-md">
      <img
        className="h-12 md:h-14 cursor-pointer hover:scale-105 transition-transform duration-300"
        src="/logo.png"
        alt="Netflix Logo"
        onClick={() => navigate("/")}
      />

      {user && (
        <div ref={menuRef} className="relative flex items-center z-[1000000]">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex items-center gap-2 px-3 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-200"
          >
            <FaUserCircle className="text-xl md:text-2xl" />
            <span className="capitalize hidden sm:inline">{user.fullname}</span>
            <IoIosArrowDropdownCircle
              className={`text-xl transform transition-transform ${
                menuOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          {menuOpen && (
            <div className="absolute top-14 right-0 bg-gray-800 rounded-lg shadow-lg w-44 md:w-48 animate-slide-down z-[1000001]">
              <ul className="flex flex-col text-sm md:text-base">
                <li
                  onClick={toggleHandler}
                  className={`px-4 py-2 cursor-pointer rounded-t-lg transition ${
                    toggle ? "bg-gray-700 text-red-400" : "hover:bg-gray-700"
                  }`}
                >
                  {toggle ? "Home" : "Search Movie"}
                </li>
                <li
                  onClick={logoutHandler}
                  className="px-4 py-2 hover:bg-red-600 cursor-pointer rounded-b-lg transition"
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;
