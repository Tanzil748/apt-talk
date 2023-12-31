import React, { useContext } from "react";
import { Event } from "@mui/icons-material";
import profileImg from "../assets/profile.jpg";
import AuthContext from "../context/AuthContext";

const RightBar = () => {
  const { loggedUser } = useContext(AuthContext);
  return (
    <div className="w-1/4 m-2.5 hidden lg:block">
      <div className="sticky top-20">
        {/* message card */}
        {loggedUser ? (
          <div className="bg-white mb-4 rounded-md p-3 h-[80vh] overflow-y-auto no-scrollbar">
            <p className="font-semibold text-sm">Online Friends</p>
            {/* REFACTOR LATER */}
            <div className="flex gap-4 items-center my-2">
              <div className="avatar online">
                <div className="w-9 rounded-full">
                  <img src={profileImg} alt="temp" />
                </div>
              </div>
              <p className="text-sm font-semibold">Tanzil Hassan</p>
            </div>
            {/* -------------- DELETE AFTER THIS */}
            <div className="flex gap-4 items-center my-2">
              <div className="avatar online">
                <div className="w-9 rounded-full">
                  <img src={profileImg} alt="temp" />
                </div>
              </div>
              <p className="text-sm font-semibold">Tanzil Hassan</p>
            </div>
            <div className="flex gap-4 items-center my-2">
              <div className="avatar online">
                <div className="w-9 rounded-full">
                  <img src={profileImg} alt="temp" />
                </div>
              </div>
              <p className="text-sm font-semibold">Tanzil Hassan</p>
            </div>
            <div className="flex gap-4 items-center my-2">
              <div className="avatar online">
                <div className="w-9 rounded-full">
                  <img src={profileImg} alt="temp" />
                </div>
              </div>
              <p className="text-sm font-semibold">Tanzil Hassan</p>
            </div>
            <div className="flex gap-4 items-center my-2">
              <div className="avatar online">
                <div className="w-9 rounded-full">
                  <img src={profileImg} alt="temp" />
                </div>
              </div>
              <p className="text-sm font-semibold">Tanzil Hassan</p>
            </div>
            <div className="flex gap-4 items-center my-2">
              <div className="avatar online">
                <div className="w-9 rounded-full">
                  <img src={profileImg} alt="temp" />
                </div>
              </div>
              <p className="text-sm font-semibold">Tanzil Hassan</p>
            </div>
            <div className="flex gap-4 items-center my-2">
              <div className="avatar online">
                <div className="w-9 rounded-full">
                  <img src={profileImg} alt="temp" />
                </div>
              </div>
              <p className="text-sm font-semibold">Tanzil Hassan</p>
            </div>
            <div className="flex gap-4 items-center my-2">
              <div className="avatar online">
                <div className="w-9 rounded-full">
                  <img src={profileImg} alt="temp" />
                </div>
              </div>
              <p className="text-sm font-semibold">Tanzil Hassan</p>
            </div>
            <div className="flex gap-4 items-center my-2">
              <div className="avatar online">
                <div className="w-9 rounded-full">
                  <img src={profileImg} alt="temp" />
                </div>
              </div>
              <p className="text-sm font-semibold">Tanzil Hassan</p>
            </div>
            <div className="flex gap-4 items-center my-2">
              <div className="avatar online">
                <div className="w-9 rounded-full">
                  <img src={profileImg} alt="temp" />
                </div>
              </div>
              <p className="text-sm font-semibold">Tanzil Hassan</p>
            </div>
            <div className="flex gap-4 items-center my-2">
              <div className="avatar online">
                <div className="w-9 rounded-full">
                  <img src={profileImg} alt="temp" />
                </div>
              </div>
              <p className="text-sm font-semibold">Tanzil Hassan</p>
            </div>
            <div className="flex gap-4 items-center my-2">
              <div className="avatar online">
                <div className="w-9 rounded-full">
                  <img src={profileImg} alt="temp" />
                </div>
              </div>
              <p className="text-sm font-semibold">Tanzil Hassan</p>
            </div>
            <div className="flex gap-4 items-center my-2">
              <div className="avatar online">
                <div className="w-9 rounded-full">
                  <img src={profileImg} alt="temp" />
                </div>
              </div>
              <p className="text-sm font-semibold">Tanzil Hassan</p>
            </div>
            <div className="flex gap-4 items-center my-2">
              <div className="avatar online">
                <div className="w-9 rounded-full">
                  <img src={profileImg} alt="temp" />
                </div>
              </div>
              <p className="text-sm font-semibold">Tanzil Hassan</p>
            </div>
            <div className="flex gap-4 items-center my-2">
              <div className="avatar online">
                <div className="w-9 rounded-full">
                  <img src={profileImg} alt="temp" />
                </div>
              </div>
              <p className="text-sm font-semibold">Tanzil Hassan</p>
            </div>
            <div className="flex gap-4 items-center my-2">
              <div className="avatar online">
                <div className="w-9 rounded-full">
                  <img src={profileImg} alt="temp" />
                </div>
              </div>
              <p className="text-sm font-semibold">Tanzil Hassan</p>
            </div>
            <div className="flex gap-4 items-center my-2">
              <div className="avatar online">
                <div className="w-9 rounded-full">
                  <img src={profileImg} alt="temp" />
                </div>
              </div>
              <p className="text-sm font-semibold">Tanzil Hassan</p>
            </div>
            <div className="flex gap-4 items-center my-2">
              <div className="avatar online">
                <div className="w-9 rounded-full">
                  <img src={profileImg} alt="temp" />
                </div>
              </div>
              <p className="text-sm font-semibold">Tanzil Hassan</p>
            </div>
            <div className="flex gap-4 items-center my-2">
              <div className="avatar online">
                <div className="w-9 rounded-full">
                  <img src={profileImg} alt="temp" />
                </div>
              </div>
              <p className="text-sm font-semibold">Tanzil Hassan</p>
            </div>
            <div className="flex gap-4 items-center my-2">
              <div className="avatar online">
                <div className="w-9 rounded-full">
                  <img src={profileImg} alt="temp" />
                </div>
              </div>
              <p className="text-sm font-semibold">Tanzil Hassan</p>
            </div>
            <div className="flex gap-4 items-center my-2">
              <div className="avatar online">
                <div className="w-9 rounded-full">
                  <img src={profileImg} alt="temp" />
                </div>
              </div>
              <p className="text-sm font-semibold">Tanzil Hassan</p>
            </div>
            <div className="flex gap-4 items-center my-2">
              <div className="avatar online">
                <div className="w-9 rounded-full">
                  <img src={profileImg} alt="temp" />
                </div>
              </div>
              <p className="text-sm font-semibold">Tanzil Hassan</p>
            </div>
            <div className="flex gap-4 items-center my-2">
              <div className="avatar online">
                <div className="w-9 rounded-full">
                  <img src={profileImg} alt="temp" />
                </div>
              </div>
              <p className="text-sm font-semibold">Tanzil Hassan</p>
            </div>
          </div>
        ) : null}

        {/* events card */}
        <div className="bg-white rounded-md">
          <p className="text-sm font-semibold p-3">Events</p>
          <hr className="m-2" />
          <div className="flex items-center gap-3 p-3">
            <Event style={{ color: "gray", fontSize: "large" }} />
            <p className="font-semibold text-sm">
              Networking event at QC this upcoming weekend!
            </p>
          </div>
          <div className="flex items-center gap-3 p-3">
            <Event style={{ color: "gray", fontSize: "large" }} />
            <p className="font-semibold text-sm">
              Learn how to DIY your first kitchen
            </p>
          </div>
          <div className="flex items-center gap-3 p-3">
            <Event style={{ color: "gray", fontSize: "large" }} />
            <p className="font-semibold text-sm">
              Study for the realtor exam with us!
            </p>
          </div>
          <div className="flex items-center gap-3 p-3">
            <Event style={{ color: "gray", fontSize: "large" }} />
            <p className="font-semibold text-sm">Looking for an apartment?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
