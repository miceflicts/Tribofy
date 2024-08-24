"use client";

import CreateCommunityBottomProgress from "@/app/layouts/create-community/bottom-progress";
import CreateCommunityLeftSidebar from "@/app/layouts/create-community/left-sidebar";
import CreateCommunityMainFrame from "@/app/layouts/create-community/main-frame";
import React, { useState } from "react";

export default function CreateCommunity() {
  const [activeStep, setActiveStep] = useState(1);

  const handleClickedNextButton = () => {
    setActiveStep(activeStep + 1);
  };

  return (
    <div className="flex h-screen w-screen overflow-x-hidden">
      <div className="flex h-full w-fit items-center justify-center max-[1200px]:hidden">
        <CreateCommunityLeftSidebar activeStep={activeStep} />
      </div>

      <div className="flex h-full w-full flex-col">
        <div className="mb-20 flex w-full flex-1 items-center justify-center">
          <CreateCommunityMainFrame
            activeStep={activeStep}
            clickedWelcomePageNextButton={handleClickedNextButton}
            onChoosenPricing={handleClickedNextButton}
          />
        </div>

        <div className="flex w-full items-center justify-center">
          <CreateCommunityBottomProgress activeStep={activeStep} />
        </div>
      </div>
    </div>
  );
}
