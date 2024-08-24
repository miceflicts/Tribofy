import React from "react";
import CompanyLogo from "@/app/components/general/company-logo";
import { Button } from "@/components/ui/button";

export default function CommunityWelcomePage({ onNextButtonClick }) {
  return (
    <>
      <div className="flex h-fit w-full flex-col items-center justify-center gap-3">
        <CompanyLogo
          svgSize={40}
          color="text-text-default"
          noText={true}
        ></CompanyLogo>

        <div className="flex w-fit flex-col items-center gap-1">
          <h1 className="text-3xl font-semibold text-text-default">
            Welcome to Tribofy!
          </h1>
          <h3 className="font-normal text-highlighted-text">
            Get up and running in 3 minutes.
          </h3>
        </div>
      </div>

      <div className="aspect-video w-[600px] rounded-xl bg-accent max-[700px]:w-[500px] max-[550px]:w-[450px] max-[500px]:w-[400px] max-[450px]:w-[350px] max-[370px]:w-[300px]"></div>

      <Button
        className="w-[60%] bg-button py-6 text-button-text hover:bg-button-hover active:bg-button-active"
        onClick={onNextButtonClick}
      >
        Get Started Now
      </Button>
    </>
  );
}
