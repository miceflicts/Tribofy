import React from "react";
import { Tent } from "lucide-react";

export default function CompanyLogo({ svgSize, textSize, color, noText }) {
  return (
    <>
      <div
        className={`flex h-fit w-fit items-center justify-center gap-2 ${textSize !== undefined ? textSize : "text-xl"} ${color !== undefined ? color : "text-gray-800"} font-extrabold`}
      >
        <Tent
          size={svgSize !== undefined ? svgSize : 35}
          strokeWidth={2}
          className={`${color !== undefined ? color : "text-gray-800"}`}
        ></Tent>
        <h1 className={`${noText !== undefined && noText ? "hidden" : ""}`}>
          Tribofy
        </h1>
      </div>
    </>
  );
}
