import React, { useContext } from "react";
import defaultUser from "../assets/defaultUser.svg";
import { ApartmentRounded, Search, BookmarkBorder } from "@mui/icons-material";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Header = () => {
  const { loggedUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar bg-base-100 sticky top-0 z-20">
      <div className="flex-1 gap-x-2">
        {/* logo */}
        <Link to={"/"} className="btn btn-ghost text-xl">
          <ApartmentRounded />
          <div>
            Apt<span className="text-blue-500">Talk</span>
          </div>
        </Link>
        {/* search bar */}
        <div className="w-96 hidden md:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-sm px-3 py-1.5 focus-within:border-blue-500">
          <Search className="text-gray-500 duration-200" />
          <input
            type="text"
            placeholder="Search"
            className="placeholder:text-sm flex-1 outline-none"
          />
        </div>
      </div>

      <div className="flex-none gap-2">
        {/* Alert btn */}
        <button className="btn btn-ghost btn-circle hidden sm:block">
          <div
            className="indicator relative tooltip tooltip-bottom"
            data-tip="Alerts"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs bg-red-500 absolute -top-1 -right-1"></span>
          </div>
        </button>

        {/* saved */}
        <button className="btn btn-ghost btn-circle">
          <div
            className="indicator tooltip tooltip-bottom"
            data-tip="Bookmarks"
          >
            <BookmarkBorder />
          </div>
        </button>

        {/* user icon */}
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar flex py-2 flex-nowrap w-fit"
          >
            <div className="w-10 rounded-full flex">
              <img alt="User profile icon" src={defaultUser} className="w-40" />
            </div>
            {/* wrote conditional here to prevent alignment issue w/ ghost circle */}
            {loggedUser !== null ? (
              <span className="text-xs sm:text-sm">
                {loggedUser?.others.username}
              </span>
            ) : null}
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            {loggedUser !== null ? (
              <>
                <li>
                  <Link
                    to={`/user-profile/${loggedUser.others.id}`}
                    className="flex justify-between"
                  >
                    <div>Profile</div>
                    <span className="badge bg-red-500 text-white">New</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/login"} onClick={() => logout()}>
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>

                <li>
                  <Link to={"/register"}>Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
