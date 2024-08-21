import CreateCommunityBottomProgress from "@/app/layouts/create-community/bottom-progress";
import CreateCommunityLeftSidebar from "@/app/layouts/create-community/left-sidebar";
import CreateCommunityMainFrame from "@/app/layouts/create-community/main-frame";
import React from "react";

export default function CreateCommunity() {
  return (
    <div className="min-w-screen flex h-screen">
      <div className="flex h-full w-fit items-center justify-center">
        <CreateCommunityLeftSidebar activeStep={1} />
      </div>

      <div className="flex h-full w-full flex-col">
        <div className="mb-20 flex flex-1 items-center justify-center">
          <CreateCommunityMainFrame activeStep={2} />
        </div>

        <div className="mb-10 flex w-full items-center justify-center">
          <CreateCommunityBottomProgress activeStep={2} />
        </div>
      </div>
    </div>
  );
}
