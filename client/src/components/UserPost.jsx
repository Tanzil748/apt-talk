import React, { useState, useContext } from "react";
import profileImg from "../assets/profile.jpg";
import defaultUser from "../assets/defaultUser.svg";
import {
  TurnedInNot,
  TurnedIn,
  Comment,
  Share,
  LinearScale,
  Cancel,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import Comments from "./Comments";
import { apiRequests } from "../axiosReq";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import AuthContext from "../context/AuthContext";

const UserPost = ({ post }) => {
  const { loggedUser } = useContext(AuthContext);

  const [postAction, setPostAction] = useState(false);
  const [openComment, setOpenComment] = useState(false);

  // accessing commentData from Comments.jsx to get # of comments per post
  const { data: commentData } = useQuery({
    queryKey: ["comments", post.id],
    queryFn: () =>
      apiRequests.get("/comment?postId=" + post.id).then((res) => res.data),
  });

  // bookmark query functionality
  const { data } = useQuery({
    queryKey: ["bookmarks", post.id],
    queryFn: () =>
      apiRequests.get("/bookmark?postId=" + post.id).then((res) => res.data),
  });

  const queryClient = useQueryClient();

  const bookmarkMutation = useMutation({
    mutationFn: (bookmarked) => {
      if (bookmarked) {
        return apiRequests.delete("/bookmark?postId=" + post.id);
      } else {
        return apiRequests.post("/bookmark", { postId: post.id });
      }
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["bookmarks"] });
    },
  });

  const bookmarkHandler = () => {
    if (loggedUser) {
      bookmarkMutation.mutate(data.includes(loggedUser.others.id));
    } else {
      // this prevents an error from being thrown for unauthenticated user
      console.error("User needs to be authenticated to bookmark!");
    }
  };

  // delete post functionality
  const deleteMutation = useMutation({
    mutationFn: (postId) => {
      return apiRequests.delete("/post/" + postId);
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const deleteHandler = () => {
    deleteMutation.mutate(post.id);
  };

  return (
    <div>
      <div key={post.id} className="bg-white p-2 my-4 rounded-md">
        {/* top row */}
        <div className="flex justify-between items-center">
          <Link
            to={`/user-profile/${post.postauthorid}`}
            className="flex gap-2 mb-2 cursor-pointer w-fit"
          >
            {post.postauthorid === loggedUser?.others.id ? (
              <>
                <img
                  src={defaultUser}
                  alt="temp"
                  className="w-10 h-10 object-cover rounded-full"
                />
                <div>
                  <p className="text-sm font-semibold">{post.username}</p>
                  <p className="text-xs text-slate-500">
                    Posted by @{post.username}
                  </p>
                </div>
              </>
            ) : (
              <>
                <img
                  src={profileImg}
                  alt="temp"
                  className="w-10 h-10 object-cover rounded-full"
                />
                <div>
                  <p className="text-sm font-semibold">{post.username}</p>
                  <p className="text-xs text-slate-500">
                    Posted by @{post.username}
                  </p>
                </div>
              </>
            )}
          </Link>

          {/* menu btn */}
          {postAction && post.postauthorid === loggedUser?.others.id ? (
            <div className="cursor-pointer">
              <button
                className="mr-1 bg-red-500 text-white px-2 py-1 rounded-sm hover:bg-red-600 duration-200"
                onClick={deleteHandler}
              >
                Delete
              </button>
              <Cancel
                onClick={() => setPostAction(!postAction)}
                style={{ fontSize: "large" }}
              />
            </div>
          ) : (
            <LinearScale
              style={{ fontSize: "large" }}
              className="cursor-pointer"
              onClick={() => setPostAction(!postAction)}
            />
          )}
        </div>

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
            {data && data.includes(loggedUser?.others.id) ? (
              <div>
                <TurnedIn
                  style={{ fontSize: "large" }}
                  onClick={bookmarkHandler}
                />
                <span className="ml-1">
                  {data && data.length !== undefined ? data.length : null}{" "}
                  Bookmark
                </span>
              </div>
            ) : (
              <div>
                <TurnedInNot
                  style={{ fontSize: "large" }}
                  onClick={bookmarkHandler}
                />
                <span className="ml-1">
                  {data && data.length !== undefined ? data.length : null}{" "}
                  Bookmark
                </span>
              </div>
            )}
          </button>
          <button
            className="text-xs text-slate-500"
            onClick={() => setOpenComment(!openComment)}
          >
            <Comment style={{ fontSize: "large" }} />
            <span className="ml-1">
              {commentData && commentData.length !== undefined
                ? commentData.length
                : null}{" "}
              Comments
            </span>
          </button>
          <button className="text-xs text-slate-500">
            <Share style={{ fontSize: "large" }} />
            <span className="ml-1">0 Shares</span>
          </button>
        </div>
        {openComment && <Comments key={post.id} postId={post.id} />}
      </div>
    </div>
  );
};

export default UserPost;
