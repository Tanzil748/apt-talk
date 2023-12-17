import React, { useState, useContext } from "react";
import defaultUser from "../assets/defaultUser.svg";
import profileImg from "../assets/profile.jpg";
import { apiRequests } from "../axiosReq";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import AuthContext from "../context/AuthContext";

const Comments = ({ postId }) => {
  const { loggedUser } = useContext(AuthContext);
  const [commentContent, setCommentContent] = useState("");

  const { isLoading, data } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () =>
      apiRequests.get("/comment?postId=" + postId).then((res) => res.data),
  });

  const queryClient = useQueryClient();

  const addCommentMutation = useMutation({
    mutationFn: (newComment) => {
      return apiRequests.post("/comment/addComment", newComment);
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    if (commentContent.trim() === "") {
      // Check if commentContent is empty or contains only whitespace
      return;
    }
    addCommentMutation.mutate({ commentContent, postId });
    setCommentContent("");
  };

  return (
    <div className="mt-4">
      {/* input field */}
      {loggedUser ? (
        <form className="flex gap-2 mb-2" onSubmit={submitHandler}>
          <img
            src={defaultUser}
            alt="temp"
            className="w-10 h-10 object-cover rounded-full"
          />
          <input
            type="text"
            placeholder="Thoughts on this post?"
            className="flex-1 gap-x-1 border-[1px] border-lightText/50 rounded-sm px-3 py-1.5 outline-none focus-within:border-blue-500 mb-2 text-sm"
            value={commentContent}
            onChange={(e) => setCommentContent(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white hover:bg-blue-600 duration-200 px-2 py-1 rounded-sm h-9"
            type="submit"
          >
            Send
          </button>
        </form>
      ) : null}

      {isLoading ? (
        "Comments Loading..."
      ) : data.length > 0 ? (
        data.map((comment) => (
          <div className="flex gap-2 mb-2" key={comment.id}>
            <img
              src={defaultUser}
              alt={`${comment.username} comment`}
              className="w-10 h-10 object-cover rounded-full"
            />
            <div>
              <p className="text-sm font-semibold mb-1">{comment.username}</p>
              <p className="text-sm text-slate-500">{comment.commentcontent}</p>
            </div>
          </div>
        ))
      ) : (
        <span className="flex justify-center">No comments...</span>
      )}
    </div>
  );
};

export default Comments;
