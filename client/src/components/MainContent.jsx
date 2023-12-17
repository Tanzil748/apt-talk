import React, { useContext } from "react";
import Stories from "./Stories";
import AddPostForm from "./AddPostForm";
import UserPost from "./UserPost";
import AuthContext from "../context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { apiRequests } from "../axiosReq";
import { WarningAmber, Error } from "@mui/icons-material";

const MainContent = () => {
  const { loggedUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () => apiRequests.get("/post").then((res) => res.data),
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center max-w-[1400px] mx-auto min-h-[83vh] my-2.5">
        <div className="shadow-xl sm:w-[30rem] h-96 rounded-md flex flex-col justify-center items-center gap-y-4 text-center">
          <WarningAmber
            className="text-amber-500"
            style={{ fontSize: "3rem" }}
          />
          <h1 className="font-extrabold text-xl">Data Loading...</h1>
          <p className="text-sm">Connecting to server instance.</p>
          <p className="text-sm font-semibold">
            If you have any questions feel free to contact us.
          </p>
          <p className="font-semibold mt-2">
            Apt<span className="text-blue-500">Talk</span>
          </p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center max-w-[1400px] mx-auto min-h-[83vh] my-2.5">
        <div className="shadow-xl sm:w-[30rem] h-96 rounded-md flex flex-col justify-center items-center gap-y-4 text-center">
          <Error className="text-red-800" style={{ fontSize: "3rem" }} />
          <h1 className="font-extrabold text-xl">Data failed to fetch.</h1>
          <p className="text-sm">{error.message}</p>
          <p className="text-sm font-semibold">
            Check our github for updates on situation.
          </p>
          <p className="font-semibold mt-2">
            Apt<span className="text-blue-500">Talk</span>
          </p>
        </div>
      </div>
    );
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
