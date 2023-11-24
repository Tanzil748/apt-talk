import React from "react";
import LeftBar from "../components/LeftBar";
import MainContent from "../components/MainContent";
import RightBar from "../components/RightBar";

const HomePage = () => {
  return (
    <div className="flex 2xl:container mx-auto">
      {/* left bar - profile, nav links, other communities */}
      <LeftBar />
      {/* main content - user stories, add post, all posts */}
      <MainContent />
      {/* right bar - online friends, events */}
      <RightBar />
    </div>
  );
};

export default HomePage;
