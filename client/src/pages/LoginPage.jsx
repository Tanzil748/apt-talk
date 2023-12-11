import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import googleIcon from "../assets/icons8-google.svg";
import githubIcon from "../assets/icons8-github.svg";
import AuthContext from "../context/AuthContext";

const LoginPage = () => {
  const { login } = useContext(AuthContext);

  const [userInputs, setUserInputs] = useState({
    email: "",
    userPassword: "",
  });
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      await login(userInputs);
      navigate("/");
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  // handle user input
  const changeHandler = (e) => {
    setUserInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="xl:container mx-auto flex justify-center items-center h-[90vh]">
      {/* form container */}
      <div className="bg-white rounded-sm w-96 p-10 mx-2">
        <h1 className="text-xl font-base mb-6">Log In</h1>
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
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-0.5 bg-gray-300/50"></div>
          <div className="text-center text-gray-400">Or</div>
          <div className="flex-1 h-0.5 bg-gray-300/50"></div>
        </div>

        {/* form */}
        <form>
          <p className="text-red-500 text-xs text-center">{errors}</p>
          {/* email */}
          <div className="flex flex-col mb-2 gap-1">
            <label className="text-sm">Email</label>
            <input
              type="text"
              placeholder="Enter email"
              className="gap-x-1 border-[1px] border-lightText/50 rounded-sm px-3 py-1.5 focus-within:border-blue-500 text-sm"
              name="email"
              onChange={changeHandler}
            />
          </div>
          <div className="flex flex-col mb-6 gap-1">
            <label className="text-sm">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="gap-x-1 border-[1px] border-lightText/50 rounded-sm px-3 py-1.5 focus-within:border-blue-500 text-sm"
              name="userPassword"
              onChange={changeHandler}
            />
          </div>
        </form>

        {/* submission btn */}
        <button
          className="rounded-md font-semibold text-sm px-2 py-4 bg-blue-500 hover:bg-blue-600 duration-200 text-white w-full"
          onClick={loginHandler}
        >
          Log In
        </button>
        <p className="text-xs flex justify-center items-center mt-4">
          Don't have an account?
          <span className="ml-3">
            <Link to={"/register"} className="text-blue-500 font-semibold">
              Sign Up
            </Link>{" "}
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
