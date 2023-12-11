import React, { useState, useEffect, useRef } from "react";
import profileImg from "../assets/profile.jpg";
import {
  PhotoSizeSelectLarge,
  InsertLink,
  AlternateEmail,
} from "@mui/icons-material";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { apiRequests } from "../axiosReq";

const AddPostForm = () => {
  // this is for text content
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set height to scrollHeight
    }
  }, [text]);

  // this is for file input
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  // react query for adding posts BELOW
  const queryClient = useQueryClient();

  const addPostMutation = useMutation({
    mutationFn: (newPost) => {
      return apiRequests.post("/post", newPost);
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    // let picUrl = "";
    // if (file) {
    //   picUrl = await upload();
    // }
    // mutation.mutate({ title, postContent, picture: picUrl });
    addPostMutation.mutate({ postContent: text }); //text from the useState hook
    setText("");
  };
  return (
    <div className="bg-white my-4 rounded-md">
      <form onSubmit={submitHandler}>
        {/* upper row */}
        <div className="flex gap-2 items-center p-2">
          <img
            src={profileImg}
            alt="temp logged user"
            className="w-10 h-10 object-cover rounded-full self-start"
          />
          <textarea
            ref={textareaRef}
            value={text}
            placeholder="Thoughts on your mind? Share it!"
            className="flex-1 rounded-md p-2 border-[1px] border-lightText/50 text-sm outline-none focus-within:border-blue-500 resize-none"
            rows={1}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 duration-200 text-white rounded-sm px-2 py-1 self-end"
          >
            Share Post
          </button>
        </div>

        <hr className="my-2" />

        {/* lower row */}
        <div className="p-2 flex items-center gap-4">
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button className="flex gap-1 items-center" onClick={handleFileClick}>
            <PhotoSizeSelectLarge
              style={{ color: "blue", fontSize: "small" }}
            />
            <span className="text-xs text-slate-500">Image/Video</span>
          </button>

          {/* Attachment & mention will be included in FUTURE versions */}
          <button className="flex gap-1 items-center pointer-events-none">
            <InsertLink style={{ color: "#CAB343", fontSize: "small" }} />
            <span className="text-xs text-slate-500">Attachment</span>
          </button>
          <button className="flex gap-1 items-center pointer-events-none">
            <AlternateEmail style={{ color: "#64748b", fontSize: "small" }} />
            <span className="text-xs text-slate-500">Mention</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPostForm;
