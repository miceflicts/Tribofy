import CompanyLogo from "@/app/components/general/company-logo";
import React from "react";
import CreateCommunityProgress from "../create-community-progress";

export default function CreateCommunityLeftSidebar() {
  return (
    <>
      <div className="ml-2 flex h-[98vh] w-[450px] flex-col gap-20 rounded-2xl border border-border bg-emphasis p-10">
        <CompanyLogo
          svgSize={40}
          textSize={"text-[1.6rem]"}
          color="text-gray-500 dark:text-gray-300"
        />

        <CreateCommunityProgress></CreateCommunityProgress>
      </div>
    </>
  );
}
