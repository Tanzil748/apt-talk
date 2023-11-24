import React from "react";
import defaultUser from "../assets/defaultUser.svg";
import profileImg from "../assets/profile.jpg";

const Comments = () => {
  const fakeComments = [
    {
      id: 1,
      username: "Tanzil Hassan",
      userId: 1,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi tempore ducimus ullam rerum? Optio soluta ullam dolores nihil placeat aspernatur velit totam. Sapiente voluptatem alias ipsam illum amet dolore vitae.",
    },
    {
      id: 2,
      username: "Bob Johnson",
      userId: 2,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi tempore ducimus ullam rerum? Optio soluta ullam dolores nihil placeat aspernatur velit totam. Sapiente voluptatem alias ipsam illum amet dolore vitae.",
    },
    {
      id: 3,
      username: "John Jones",
      userId: 3,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi tempore ducimus ullam rerum? Optio soluta ullam dolores nihil placeat aspernatur velit totam. Sapiente voluptatem alias ipsam illum amet dolore vitae.",
    },
  ];
  return (
    <div className="mt-4">
      {/* input field */}
      <div className="flex gap-2 mb-2">
        <img
          src={profileImg}
          alt="temp"
          className="w-10 h-10 object-cover rounded-full"
        />
        <input
          type="text"
          placeholder="Thoughts on this post?"
          className="flex-1 gap-x-1 border-[1px] border-lightText/50 rounded-sm px-3 py-1.5 outline-none focus-within:border-blue-500 mb-2 text-sm"
        />
        <button className="bg-blue-500 text-white hover:bg-blue-600 duration-200 px-2 py-1 rounded-sm h-9">
          Send
        </button>
      </div>
      {fakeComments.map((comment) => (
        <div className="flex gap-2 mb-2" key={comment.id}>
          <img
            src={defaultUser}
            alt={`${comment.username} comment`}
            className="w-10 h-10 object-cover rounded-full"
          />
          <div>
            <p className="text-sm font-semibold mb-1">{comment.username}</p>
            <p className="text-sm text-slate-500">{comment.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
