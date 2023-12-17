import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import profileBackdrop from "../assets/profileBackdrop.jpg";
import profileImg from "../assets/profile.jpg";
import UserPost from "../components/UserPost";
import AuthContext from "../context/AuthContext";
import { apiRequests } from "../axiosReq";
import { useQuery } from "@tanstack/react-query";
// import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";

const UserProfilePage = () => {
  const { id } = useParams();
  const { loggedUser } = useContext(AuthContext);
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: () => apiRequests.get(`/user/${id}`).then((res) => res.data),
  });

  const fakeUserPost = [
    {
      id: 1,
      username: "Tanzil Hassan",
      userId: 1,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi tempore ducimus ullam rerum? Optio soluta ullam dolores nihil placeat aspernatur velit totam. Sapiente voluptatem alias ipsam illum amet dolore vitae.",
      picture:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60",
    },
    {
      id: 2,
      username: "Tanzil Hassan",
      userId: 1,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi tempore ducimus ullam rerum? Optio soluta ullam dolores nihil placeat aspernatur velit totam. Sapiente voluptatem alias ipsam illum amet dolore vitae.",
      picture:
        "https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60",
    },
  ];
  return (
    <div className="min-h-[90vh] xl:container mx-auto">
      {/* backdrop */}
      <div>
        <img
          src={profileBackdrop}
          alt="profile backdrop"
          className="w-full h-96 object-cover brightness-75"
        />
      </div>

      {/* user info box */}
      <div className="bg-white h-52 lg:h-40 p-2 relative">
        {/* profile img */}
        <img
          src={profileImg}
          alt="user profile"
          className="absolute left-1/2 bottom-40 transform lg:transform-none -translate-x-1/2 lg:-translate-x-0 lg:left-2 lg:bottom-2 mx-auto w-52 lg:w-64 h-52 lg:h-64 rounded-full object-cover z-10"
        />

        {/* content */}
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="ml-0 lg:ml-72 mt-14 lg:mt-4 flex flex-col items-center lg:items-start">
            <p className="text-4xl font-semibold">{data?.username}</p>
            <p className="text-base font-medium text-slate-500">163 Friends</p>
          </div>
          {id === loggedUser?.others?.id ? (
            <button className="bg-blue-500 hover:bg-blue-600 duration-200 px-2 py-1 mt-4 lg:mt-0 text-white rounded-sm">
              Update Profile
            </button>
          ) : (
            <button className="bg-blue-500 hover:bg-blue-600 duration-200 px-2 py-1 mt-4 lg:mt-0 text-white rounded-sm">
              Follow User
            </button>
          )}
        </div>
      </div>
      <hr />

      {/* user post history */}
      {fakeUserPost.map((post) => (
        <UserPost post={post} key={post.id} />
      ))}
    </div>
  );
};

export default UserProfilePage;
