import React from "react";
import CommunityWelcomePage from "../steps/welcome-page";
import CommunityDetailsPage from "../steps/details-page";
import CommunityDetailsPricing from "../steps/pricing";

export default function CreateCommunityMainFrame({
  activeStep,
  clickedWelcomePageNextButton,
  onGetCommunityDetails,
}) {
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
            onFormSubmit={onGetCommunityDetails}
          ></CommunityDetailsPage>
        )}
        {activeStep === 3 && (
          <CommunityDetailsPricing></CommunityDetailsPricing>
        )}
      </div>
    </>
  );
}
