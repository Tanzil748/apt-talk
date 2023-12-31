import React, { useContext } from "react";
import defaultUser from "../assets/defaultUser.svg";
import {
  Home,
  PeopleAlt,
  Event,
  Videocam,
  PhotoSizeSelectLarge,
  ListAlt,
  InsertDriveFile,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  CheckCircle,
} from "@mui/icons-material";
import AuthContext from "../context/AuthContext";

const LeftBar = () => {
  const { loggedUser } = useContext(AuthContext);

  return (
    <div className="w-1/4 m-2.5 hidden md:block">
      <div className="sticky top-20">
        {/* profile card */}
        {loggedUser ? (
          <div className="bg-white rounded-md mb-4 p-4">
            <div className="bg-neutral-100 rounded-md">
              {/* row 1 */}
              <div className="flex items-center gap-2 p-2">
                <img
                  src={defaultUser}
                  // src={loggedUser?.others.profilepic}
                  alt="TEMPORARY"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-xs lg:text-sm font-semibold">
                    {loggedUser?.others.username}{" "}
                    <span>
                      <CheckCircle style={{ fontSize: "8px", color: "blue" }} />
                    </span>
                  </p>
                  <p className="text-xs font-light text-slate-500">
                    @{loggedUser?.others.username}
                  </p>
                </div>
              </div>

              {/* row 2 */}
              <div className="flex justify-between p-2">
                <div className="flex flex-col items-center justify-center">
                  <p className="font-bold">2.3k</p>
                  <p className="text-xs text-slate-500">Follower</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="font-bold">235</p>
                  <p className="text-xs text-slate-500">Following</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="font-bold">80</p>
                  <p className="text-xs text-slate-500">Post</p>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* page links & pages you like */}
        <div className="bg-white rounded-md p-4 text-slate-600">
          <div className="flex gap-3 p-2 rounded-lg bg-blue-600 text-white cursor-pointer">
            <Home />
            <p>Feed</p>
          </div>
          <div className="flex gap-3 p-2 rounded-lg hover:bg-blue-600 hover:text-white cursor-pointer duration-200">
            <PeopleAlt />
            <p>Friends</p>
          </div>
          <div className="flex gap-3 p-2 rounded-lg hover:bg-blue-600 hover:text-white cursor-pointer duration-200">
            <Event />
            <p>Event</p>
          </div>
          <div className="flex gap-3 p-2 rounded-lg hover:bg-blue-600 hover:text-white cursor-pointer duration-200">
            <Videocam />
            <p>Watch Videos</p>
          </div>
          <div className="flex gap-3 p-2 rounded-lg hover:bg-blue-600 hover:text-white cursor-pointer duration-200">
            <PhotoSizeSelectLarge />
            <p>Photos</p>
          </div>
          <div className="flex gap-3 p-2 rounded-lg hover:bg-blue-600 hover:text-white cursor-pointer duration-200">
            <ListAlt />
            <p>Listings</p>
          </div>
          <div className="flex gap-3 p-2 rounded-lg hover:bg-blue-600 hover:text-white cursor-pointer duration-200">
            <InsertDriveFile />
            <p>Files</p>
          </div>

          <hr className="text-black mt-4 mb-6" />

          <p className="text-sm pl-2 truncate">OUR OTHER COMMUNITIES</p>
          <div className="flex gap-3 p-2">
            <Facebook style={{ color: "#1877f2" }} />
            <p className="text-black font-semibold">Facebook</p>
          </div>
          <div className="flex gap-3 p-2">
            <Instagram style={{ color: "#dd2a7b" }} />
            <p className="text-black font-semibold">Instagram</p>
          </div>
          <div className="flex gap-3 p-2">
            <LinkedIn style={{ color: "#0072b1" }} />
            <p className="text-black font-semibold">Linkedin</p>
          </div>
          <div className="flex gap-3 p-2">
            <Twitter style={{ color: "#1da1f2" }} />
            <p className="text-black font-semibold">Twitter</p>
          </div>
          <p className="text-sm text-slate-500 font-semibold mt-2 pl-2">
            View All
          </p>
        </div>

        <div className="text-slate-600 text-xs">
          <div className="flex gap-5 flex-wrap mt-5 mb-2">
            <p>Privacy Terms</p>
            <p>Advertising</p>
            <p>Cookies</p>
          </div>
          <p>AptTalk © 2023</p>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
