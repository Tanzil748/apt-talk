import React, { useContext } from "react";
import Stories from "./Stories";
import AddPostForm from "./AddPostForm";
import UserPost from "./UserPost";
import AuthContext from "../context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { apiRequests } from "../axiosReq";

const MainContent = () => {
  const { loggedUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () => apiRequests.get("/post").then((res) => res.data),
  });

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  return (
    <div className="flex-1 mb-2.5 mx-2.5 overflow-x-hidden">
      {loggedUser ? (
        <>
          <Stories />
          <AddPostForm />
        </>
      ) : null}
      {data?.rows.map((post) => (
        <UserPost post={post} key={post.id} />
      ))}
    </div>
  );
};

export default MainContent;
