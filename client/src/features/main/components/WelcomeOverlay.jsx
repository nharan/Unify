import React from "react";
import { BiWorld } from "react-icons/bi";

export const WelcomeOverlay = () => {
  return (
    <div className="flex justify-center items-center flex-col text-center text-white h-full">
      <BiWorld
        className="sm:text-7xl text-6xl mb-4"
        style={{ color: "dodgerblue" }}
      />
      <div className="sm:text-3xl text-2xl font-medium mb-2">
        Unify
      </div>
      <div className="sm:text-lg text-md mt-2">
        Make new friends <br />
        face-to-face
      </div>
    </div>
  );
};
