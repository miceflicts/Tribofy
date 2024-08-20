import CreateCommunityLeftSidebar from "@/app/layouts/create-community/create-community-left-sidebar";
import React from "react";

export default function CreateCommunity() {
  return (
    <>
      <div className="min-w-screen flex h-screen">
        <div className="flex h-full w-fit items-center justify-center">
          <CreateCommunityLeftSidebar></CreateCommunityLeftSidebar>
        </div>
      </div>
    </>
  );
}
