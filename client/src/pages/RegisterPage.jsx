import React from "react";
import { Link } from "react-router-dom";
import googleIcon from "../assets/icons8-google.svg";
import githubIcon from "../assets/icons8-github.svg";

const RegisterPage = () => {
  return (
    <div className="xl:container mx-auto flex justify-center items-center h-[90vh]">
      {/* form container */}
      <div className="bg-white rounded-sm w-96 p-10 mx-2">
        <h1 className="text-xl font-base mb-6">Register</h1>
        {/* social btns */}
        <div className="flex flex-col gap-3">
          <button className="bg-blue-200/50 hover:bg-blue-200 duration-200 rounded-md font-semibold text-sm px-2 py-4 flex justify-center items-center gap-2">
            <img src={googleIcon} alt="google icon" className="w-5 h-5" />
            Continue with Google
          </button>
          <button className="bg-blue-200/50 hover:bg-blue-200 duration-200 rounded-md font-semibold text-sm px-2 py-4 flex justify-center items-center gap-2">
            <img src={githubIcon} alt="github icon" className="w-5 h-5" />
            Continue with Github
          </button>
        </div>
        {/* divider */}
        <div class="flex items-center gap-4 my-6">
          <div class="flex-1 h-0.5 bg-gray-300/50"></div>
          <div class="text-center text-gray-400">Or</div>
          <div class="flex-1 h-0.5 bg-gray-300/50"></div>
        </div>

        {/* form */}
        <form action="">
          {/* username */}
          <div className="flex flex-col mb-2 gap-1">
            <label htmlFor="" className="text-sm">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="gap-x-1 border-[1px] border-lightText/50 rounded-sm px-3 py-1.5 focus-within:border-blue-500 text-sm"
            />
          </div>
          {/* email */}
          <div className="flex flex-col mb-2 gap-1">
            <label htmlFor="" className="text-sm">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter email"
              className="gap-x-1 border-[1px] border-lightText/50 rounded-sm px-3 py-1.5 focus-within:border-blue-500 text-sm"
            />
          </div>
          <div className="flex flex-col mb-6 gap-1">
            <label htmlFor="" className="text-sm">
              Password
            </label>
            <input
              type="text"
              placeholder="Enter password"
              className="gap-x-1 border-[1px] border-lightText/50 rounded-sm px-3 py-1.5 focus-within:border-blue-500 text-sm"
            />
          </div>
        </form>

        {/* submission btn */}
        <button className="rounded-md font-semibold text-sm px-2 py-4 bg-blue-500 hover:bg-blue-600 duration-200 text-white w-full">
          Register
        </button>
        <p className="text-xs flex justify-center items-center mt-4">
          Already have an account?
          <span className="ml-3">
            <Link to={"/login"} className="text-blue-500 font-semibold">
              Sign In
            </Link>{" "}
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
