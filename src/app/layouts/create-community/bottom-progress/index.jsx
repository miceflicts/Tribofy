import React from "react";

export default function CreateCommunityBottomProgress({ activeStep }) {
  return (
    <>
      <div className="flex h-[10px] w-fit gap-5 rounded-xl">
        <div
          className={`flex h-full w-[80px] rounded-xl ${activeStep === 1 ? "bg-primary" : "bg-element-inactive"}`}
        ></div>
        <div
          className={`flex h-full w-[80px] rounded-xl ${activeStep === 2 ? "bg-primary" : "bg-element-inactive"}`}
        ></div>
        <div
          className={`flex h-full w-[80px] rounded-xl ${activeStep === 3 ? "bg-primary" : "bg-element-inactive"}`}
        ></div>
      </div>
    </>
  );
}
