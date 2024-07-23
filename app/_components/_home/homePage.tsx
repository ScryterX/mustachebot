import React from "react";
import Slideshow from "@/app/_components/_home/slideshow";
import LoginCard from "@/app/_components/_home/LoginCard";

const HomePage = () => {
  return (
    <div className="flex min-h-screen">
      <div className="relative flex-1">
        <Slideshow />
      </div>
      <div className="flex flex-1 items-center justify-center">
        <LoginCard />
      </div>
    </div>
  );
};

export default HomePage;
