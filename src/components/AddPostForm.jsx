import React from "react";
import profileImg from "../assets/profile.jpg";
import {
  PhotoSizeSelectLarge,
  InsertLink,
  AlternateEmail,
} from "@mui/icons-material";

const AddPostForm = () => {
  return (
    <div className="bg-white my-4 rounded-md">
      {/* upper row */}
      <div className="flex gap-2 items-center p-2">
        <img
          src={profileImg}
          alt="temp logged user"
          className="w-10 h-10 object-cover rounded-full"
        />
        <input
          type="text"
          placeholder="Thoughts on your mind? Share it!"
          className="flex-1 rounded-md p-2 border-[1px] border-lightText/50 text-sm outline-none focus-within:border-blue-500"
        />
        <button className="bg-blue-500 hover:bg-blue-600 duration-200 text-white rounded-sm px-2 py-1">
          Share Post
        </button>
      </div>

      <hr className="my-2" />

      {/* lower row */}
      <div className="p-2 flex items-center gap-4">
        <button className="flex gap-1 items-center">
          <PhotoSizeSelectLarge style={{ color: "blue", fontSize: "small" }} />
          <span className="text-xs text-slate-500">Image/Video</span>
        </button>
        <button className="flex gap-1 items-center">
          <InsertLink style={{ color: "#CAB343", fontSize: "small" }} />
          <span className="text-xs text-slate-500">Attachment</span>
        </button>
        <button className="flex gap-1 items-center">
          <AlternateEmail style={{ color: "#64748b", fontSize: "small" }} />
          <span className="text-xs text-slate-500">Mention</span>
        </button>
      </div>
    </div>
  );
};

export default AddPostForm;