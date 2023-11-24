import React, { useState, useEffect } from "react";
import profileImg from "../assets/profile.jpg";
import { AddCircle } from "@mui/icons-material";

const Stories = () => {
  const [clicked, setClicked] = useState(true);

  useEffect(() => {}, [clicked]);
  return (
    <div className="bg-white rounded-md h-20 overflow-x-auto overflow-y-hidden flex items-center p-2 gap-2">
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
      <button className="flex flex-col flex-none justify-center items-center gap-1">
        <img
          src={profileImg}
          alt="logged user story"
          className="w-14 h-14 object-cover rounded-full border-4 border-double border-blue-500"
        />
        <p className="text-[.6rem] text-slate-600">Tanzil Hassan</p>
      </button>
      <button className="flex flex-col flex-none justify-center items-center gap-1">
        <img
          src={profileImg}
          alt="logged user story"
          className="w-14 h-14 object-cover rounded-full border-4 border-double border-blue-500"
        />
        <p className="text-[.6rem] text-slate-600">Tanzil Hassan</p>
      </button>
      <button className="flex flex-col flex-none justify-center items-center gap-1">
        <img
          src={profileImg}
          alt="logged user story"
          className="w-14 h-14 object-cover rounded-full border-4 border-double border-blue-500"
        />
        <p className="text-[.6rem] text-slate-600">Tanzil Hassan</p>
      </button>
      <button className="flex flex-col flex-none justify-center items-center gap-1">
        <img
          src={profileImg}
          alt="logged user story"
          className="w-14 h-14 object-cover rounded-full border-4 border-double border-blue-500"
        />
        <p className="text-[.6rem] text-slate-600">Tanzil Hassan</p>
      </button>
      <button className="flex flex-col flex-none justify-center items-center gap-1">
        <img
          src={profileImg}
          alt="logged user story"
          className="w-14 h-14 object-cover rounded-full border-4 border-double border-blue-500"
        />
        <p className="text-[.6rem] text-slate-600">Tanzil Hassan</p>
      </button>
      <button className="flex flex-col flex-none justify-center items-center gap-1">
        <img
          src={profileImg}
          alt="logged user story"
          className="w-14 h-14 object-cover rounded-full border-4 border-double border-blue-500"
        />
        <p className="text-[.6rem] text-slate-600">Tanzil Hassan</p>
      </button>
      <button className="flex flex-col flex-none justify-center items-center gap-1">
        <img
          src={profileImg}
          alt="logged user story"
          className="w-14 h-14 object-cover rounded-full border-4 border-double border-blue-500"
        />
        <p className="text-[.6rem] text-slate-600">Tanzil Hassan</p>
      </button>
      <button className="flex flex-col flex-none justify-center items-center gap-1">
        <img
          src={profileImg}
          alt="logged user story"
          className="w-14 h-14 object-cover rounded-full border-4 border-double border-blue-500"
        />
        <p className="text-[.6rem] text-slate-600">Tanzil Hassan</p>
      </button>
      <button className="flex flex-col flex-none justify-center items-center gap-1">
        <img
          src={profileImg}
          alt="logged user story"
          className="w-14 h-14 object-cover rounded-full border-4 border-double border-blue-500"
        />
        <p className="text-[.6rem] text-slate-600">Tanzil Hassan</p>
      </button>
      <button className="flex flex-col flex-none justify-center items-center gap-1">
        <img
          src={profileImg}
          alt="logged user story"
          className="w-14 h-14 object-cover rounded-full border-4 border-double border-blue-500"
        />
        <p className="text-[.6rem] text-slate-600">Tanzil Hassan</p>
      </button>
      <button className="flex flex-col flex-none justify-center items-center gap-1">
        <img
          src={profileImg}
          alt="logged user story"
          className="w-14 h-14 object-cover rounded-full border-4 border-double border-blue-500"
        />
        <p className="text-[.6rem] text-slate-600">Tanzil Hassan</p>
      </button>
      <button className="flex flex-col flex-none justify-center items-center gap-1">
        <img
          src={profileImg}
          alt="logged user story"
          className="w-14 h-14 object-cover rounded-full border-4 border-double border-blue-500"
        />
        <p className="text-[.6rem] text-slate-600">Tanzil Hassan</p>
      </button>
      <button className="flex flex-col flex-none justify-center items-center gap-1">
        <img
          src={profileImg}
          alt="logged user story"
          className="w-14 h-14 object-cover rounded-full border-4 border-double border-blue-500"
        />
        <p className="text-[.6rem] text-slate-600">Tanzil Hassan</p>
      </button>
      <button className="flex flex-col flex-none justify-center items-center gap-1">
        <img
          src={profileImg}
          alt="logged user story"
          className="w-14 h-14 object-cover rounded-full border-4 border-double border-blue-500"
        />
        <p className="text-[.6rem] text-slate-600">Tanzil Hassan</p>
      </button>
      <button className="flex flex-col flex-none justify-center items-center gap-1">
        <img
          src={profileImg}
          alt="logged user story"
          className="w-14 h-14 object-cover rounded-full border-4 border-double border-blue-500"
        />
        <p className="text-[.6rem] text-slate-600">Tanzil Hassan</p>
      </button>
      <button className="flex flex-col flex-none justify-center items-center gap-1">
        <img
          src={profileImg}
          alt="logged user story"
          className="w-14 h-14 object-cover rounded-full border-4 border-double border-blue-500"
        />
        <p className="text-[.6rem] text-slate-600">Tanzil Hassan</p>
      </button>
    </div>
  );
};

export default Stories;
