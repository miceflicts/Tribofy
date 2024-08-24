import { Button } from "@/components/ui/button";
import React from "react";
import CompanyLogo from "@/app/components/general/company-logo";

export default function CommunityDetailsPricing({ onChoosenPricing }) {
  return (
    <div className="flex h-fit w-full flex-col items-center justify-center gap-3">
      <>
        <CompanyLogo
          svgSize={40}
          color="text-text-default"
          noText={true}
        ></CompanyLogo>

        <div className="flex w-fit flex-col items-center gap-1">
          <h1 className="text-3xl font-semibold text-text-default">
            Choose Your Plan, No Strings Attached
          </h1>
          <h3 className="font-normal text-highlighted-text">
            Pick the perfect plan for your needs — 30 days free, no credit card
            required.
          </h3>
        </div>

        <div className="aspect-video w-[600px] rounded-xl bg-accent"></div>

        <Button
          className="w-[60%] bg-button py-6 text-button-text hover:bg-button-hover active:bg-button-active"
          onClick={onChoosenPricing}
        >
          Get Started Now
        </Button>
      </>
    </div>
  );
}
