import React, { useState, useEffect } from "react";
import profileImg from "../assets/profile.jpg";
import { AddCircle } from "@mui/icons-material";

const Stories = () => {
  const [clicked, setClicked] = useState(true);

  // include profile img & actual story later on
  const fakeStoryData = [
    {
      username: "Bob ",
    },
    {
      username: "John",
    },
    {
      username: "Rob ",
    },
    {
      username: "Manuel",
    },
    {
      username: "Man",
    },
    {
      username: "Rob ",
    },
    {
      username: "James",
    },
    {
      username: "Bob ",
    },
    {
      username: "John",
    },
    {
      username: "Rob ",
    },
    {
      username: "Manuel",
    },
    {
      username: "Man",
    },
    {
      username: "Rob ",
    },
    {
      username: "James",
    },
    {
      username: "Bob ",
    },
    {
      username: "John",
    },
    {
      username: "Rob ",
    },
    {
      username: "Manuel",
    },
    {
      username: "Man",
    },
    {
      username: "Rob ",
    },
    {
      username: "James",
    },
  ];

  useEffect(() => {}, [clicked]);
  return (
    <div className="bg-white rounded-md h-20 overflow-x-scroll overflow-y-hidden no-scrollbar flex items-center px-2 gap-4 mt-4">
      {/* add story */}
      <div className="flex flex-col flex-none justify-center items-center gap-1 w-14 h-14 relative">
        <img
          src={profileImg}
          alt="logged user story"
          className="w-full h-full object-cover rounded-full border-4 border-double border-blue-500"
        />
        <p className="text-[.6rem] text-slate-600">Your Story</p>
        <button className="absolute bottom-1 right-0">
          <AddCircle
            style={{
              color: "blue",
              backgroundColor: "white",
              borderRadius: "50%",
            }}
          />{" "}
        </button>
      </div>
      {/* friends stories */}
      {fakeStoryData.map((story, i) => (
        <button
          className="flex flex-col flex-none justify-center items-center gap-1"
          key={i}
        >
          <img
            src={profileImg}
            alt="logged user story"
            className="w-14 h-14 object-cover rounded-full border-4 border-double border-blue-500"
          />
          <p className="text-[.6rem] text-slate-600 text-ellipsis">
            {story.username}
          </p>
        </button>
      ))}
    </div>
  );
};

export default Stories;
