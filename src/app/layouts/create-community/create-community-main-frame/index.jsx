import React from "react";
import CommunityWelcomePage from "../steps/welcome-page";
import CommunityDetailsPage from "../steps/details-page";

export default function CreateCommunityMainFrame({ activeStep }) {
  return (
    <>
      <div className="flex h-fit w-fit flex-col items-center justify-center gap-10">
        {activeStep === 1 && <CommunityWelcomePage></CommunityWelcomePage>}
        {activeStep === 2 && <CommunityDetailsPage></CommunityDetailsPage>}
      </div>
    </>
  );
}
