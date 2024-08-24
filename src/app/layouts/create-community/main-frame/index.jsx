"use client";

import React, { useState } from "react";
import CommunityWelcomePage from "../steps/welcome-page";
import CommunityDetailsPage from "../steps/details-page";
import CommunityDetailsPricing from "../steps/pricing";
import CreatingCommunityProgress from "../steps/creating-progress";

export default function CreateCommunityMainFrame({
  activeStep,
  clickedWelcomePageNextButton,
  onChoosenPricing,
}) {
  const [communityDetails, setCommunityDetails] = useState({
    name: "",
    description: "",
    slug: "",
  });

  const handleOnChoosenPricing = (data) => {
    onChoosenPricing();

    try {
      setCommunityDetails({
        name: data.communityTitle,
        description: data.communityDescription,
        slug: data.communitySlug,
      });
    } catch (error) {
      console.error("Error: updating the community details", error);
    }
  };

  return (
    <>
      <div className="flex h-fit w-fit flex-col items-center justify-center gap-10">
        {activeStep === 1 && (
          <CommunityWelcomePage
            onNextButtonClick={clickedWelcomePageNextButton}
          ></CommunityWelcomePage>
        )}
        {activeStep === 2 && (
          <CommunityDetailsPage
            onFormSubmit={handleOnChoosenPricing}
          ></CommunityDetailsPage>
        )}
        {activeStep === 3 && (
          <CommunityDetailsPricing
            onChoosenPricing={onChoosenPricing}
          ></CommunityDetailsPricing>
        )}
        {activeStep === 4 && (
          <CreatingCommunityProgress
            communityData={communityDetails}
          ></CreatingCommunityProgress>
        )}
      </div>
    </>
  );
}
