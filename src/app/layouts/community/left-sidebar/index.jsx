import CommunitiesSections from "@/app/components/community/communities-sections";
import CommunitiesSidebar from "@/app/components/community/communities-sidebar";
import React from "react";

export default function LeftSideBar({ isShowingAddCommunities }) {
  return (
    <>
      <div
        className={`fixed flex min-h-full bg-emphasis ${isShowingAddCommunities ? "w-[380px]" : "w-[300px]"} border-r border-border`}
      >
        <div className={`${isShowingAddCommunities ? "flex" : "hidden"}`}>
          <CommunitiesSidebar></CommunitiesSidebar>
        </div>

        <div className="flex h-full w-full">
          <CommunitiesSections></CommunitiesSections>
        </div>
      </div>
    </>
  );
}
