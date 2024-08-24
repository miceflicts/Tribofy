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
    <div className="min-w-screen flex h-screen">
      <div className="flex h-full w-fit items-center justify-center">
        <CreateCommunityLeftSidebar activeStep={activeStep} />
      </div>

      <div className="flex h-full w-full flex-col">
        <div className="mb-20 flex flex-1 items-center justify-center">
          <CreateCommunityMainFrame
            activeStep={activeStep}
            clickedWelcomePageNextButton={handleClickedNextButton}
            onChoosenPricing={handleClickedNextButton}
          />
        </div>

        <div className="mb-10 flex w-full items-center justify-center">
          <CreateCommunityBottomProgress activeStep={activeStep} />
        </div>
      </div>
    </div>
  );
}
