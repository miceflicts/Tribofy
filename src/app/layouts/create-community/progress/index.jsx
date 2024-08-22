import React from "react";

import { Rocket, Pencil, Award } from "lucide-react";

export default function CreateCommunityProgress({ activeStep }) {
  return (
    // borda ativa - highlight
    <>
      <div className="flex flex-col">
        <div className="flex h-fit w-fit gap-4">
          <div className="flex flex-col items-center justify-center">
            <div
              className={`flex h-[45px] w-[45px] items-center justify-center rounded-lg border ${activeStep === 1 ? "border-highlight" : "border-border"} ${activeStep === 1 ? "opacity-100" : "opacity-50"} `}
            >
              <Rocket
                className={`text-highlighted-text ${activeStep === 1 ? "opacity-100" : "opacity-50"}`}
                size={20}
              />
            </div>
            <div
              className={`min-h-[50px] max-w-[0.5px] rounded-lg border ${activeStep === 1 ? "border-highlight" : "border-border"}`}
            ></div>
          </div>
          <div className="flex flex-col text-sm font-medium">
            <h4
              className={`text-text-default ${activeStep === 1 ? "opacity-100" : "opacity-50"}`}
            >
              Welcome Aboard!
            </h4>
            <span
              className={`text-highlighted-text ${activeStep === 1 ? "opacity-100" : "opacity-50"}`}
            >
              Get started with your Tribofy community
            </span>
          </div>
        </div>

        <div className="flex h-fit w-fit gap-4">
          <div className="flex flex-col items-center justify-center">
            <div
              className={`flex h-[45px] w-[45px] items-center justify-center rounded-lg border ${activeStep === 2 ? "border-highlight" : "border-border"} ${activeStep === 2 ? "opacity-100" : "opacity-50"} `}
            >
              <Pencil
                className={`text-highlighted-text ${activeStep === 2 ? "opacity-100" : "opacity-50"}`}
                size={20}
              />
            </div>
            <div
              className={`min-h-[50px] max-w-[0.5px] rounded-lg border ${activeStep === 2 ? "border-highlight" : "border-border"}`}
            ></div>
          </div>
          <div className="flex flex-col text-sm font-medium">
            <h4
              className={`text-text-default ${activeStep === 2 ? "opacity-100" : "opacity-50"}`}
            >
              Community Details
            </h4>
            <span
              className={`text-highlighted-text ${activeStep === 2 ? "opacity-100" : "opacity-50"}`}
            >
              Add your touch
            </span>
          </div>
        </div>

        <div className="flex h-fit w-fit gap-4">
          <div className="flex flex-col items-center justify-center">
            <div
              className={`flex h-[45px] w-[45px] items-center justify-center rounded-lg border ${activeStep === 3 ? "border-highlight" : "border-border"} ${activeStep === 3 ? "opacity-100" : "opacity-50"}`}
            >
              <Award
                className={`text-highlighted-text ${activeStep === 3 ? "opacity-100" : "opacity-50"}`}
                size={20}
              />
            </div>
          </div>
          <div className="flex flex-col text-sm font-medium">
            <h4
              className={`text-text-default ${activeStep === 3 ? "opacity-100" : "opacity-50"}`}
            >
              Select a Plan
            </h4>
            <span
              className={`text-highlighted-text ${activeStep === 3 ? "opacity-100" : "opacity-50"}`}
            >
              With a 30 days free trial
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
