import React from "react";
import CompanyLogo from "@/app/components/general/company-logo";

export default function LandingPageHeader() {
  return (
    <>
      <header className="fixed flex h-[90px] w-full items-center justify-center max-[810px]:h-[64px]">
        <div className="fixed flex h-[54px] w-[600px] items-center justify-between rounded-full border-[0.5px] border-[#ffffff1a] bg-[#141419] pl-7 pr-7 max-[810px]:h-[64px] max-[810px]:w-full max-[810px]:rounded-none max-[810px]:bg-black">
          <CompanyLogo svgSize={35} textSize={"text-xl"} />

          <div></div>
        </div>
      </header>
    </>
  );
}
