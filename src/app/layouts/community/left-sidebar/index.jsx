import CommunitiesSections from "@/app/components/community/communities-sections";
import CommunitiesSidebar from "@/app/components/community/communities-sidebar";
import React from "react";

export default function LeftSideBar({
  isShowingAddCommunities,
  toggleSidebar,
  width,
}) {
  return (
    <>
      <div
        className={`fixed z-20 flex min-h-full bg-emphasis ${isShowingAddCommunities ? "w-[380px]" : "w-[300px]"} border-r border-border`}
      >
        <div className={`${isShowingAddCommunities ? "flex" : "hidden"}`}>
          <CommunitiesSidebar></CommunitiesSidebar>
        </div>

        <div className="flex h-full w-full">
          <CommunitiesSections></CommunitiesSections>
        </div>
      </div>

      <div
        className={`fixed z-10 min-h-full w-full bg-emphasis opacity-60 ${width >= 1024 ? "hidden" : ""}`}
        onClick={toggleSidebar}
      ></div>
    </>
  );
}
