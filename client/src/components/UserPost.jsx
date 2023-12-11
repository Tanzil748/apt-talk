import React, { useState } from "react";
import profileImg from "../assets/profile.jpg";
import { TurnedInNot, TurnedIn, Comment, Share } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Comments from "./Comments";

const UserPost = ({ post }) => {
  const bookmarked = false;
  const [openComment, setOpenComment] = useState(false);

  return (
    <div>
      <div key={post.id} className="bg-white p-2 my-4 rounded-md">
        {/* top row */}
        <Link
          to={`/user-profile/${post.userId}`}
          className="flex gap-2 mb-2 cursor-pointer w-fit"
        >
          <img
            src={profileImg}
            alt="temp"
            className="w-10 h-10 object-cover rounded-full"
          />
          <div>
            <p className="text-sm font-semibold">{post.username}</p>
            <p className="text-xs text-slate-500">Posted by @{post.username}</p>
          </div>
        </Link>

        {/* content row */}
        <div>
          <p className="text-sm">{post?.postcontent}</p>
          {post?.picture ? (
            <img
              src={post?.picture}
              alt={`${post.username} post`}
              className="w-full h-72 object-cover rounded-md mt-2"
            />
          ) : null}
        </div>

        <hr className="my-3" />

        {/* user reaction row - bookmark/comments/share */}
        <div className="flex gap-3">
          <button className="text-xs text-slate-500">
            {!bookmarked ? (
              <TurnedInNot style={{ fontSize: "large" }} />
            ) : (
              <TurnedIn style={{ fontSize: "large" }} />
            )}
            <span className="ml-1">10 Bookmarks</span>
          </button>
          <button
            className="text-xs text-slate-500"
            onClick={() => setOpenComment(!openComment)}
          >
            <Comment style={{ fontSize: "large" }} />
            <span className="ml-1">8 Comments</span>
          </button>
          <button className="text-xs text-slate-500">
            <Share style={{ fontSize: "large" }} />
            <span className="ml-1">5 Shares</span>
          </button>
        </div>
        {openComment && <Comments key={post.id} />}
      </div>
    </div>
  );
};

export default UserPost;
