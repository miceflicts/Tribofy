"use client";

import useWindowDimensions from "@/app/hooks/use-window-dimensions";
import CommunityHeader from "@/app/layouts/community/header";
import LeftSideBar from "@/app/layouts/community/left-sidebar";
import React, { useState } from "react";

export default function Community() {
  const { width, height } = useWindowDimensions();
  const [sidebarToggled, setSidebarToggled] = useState(false);

  return (
    <>
      <div className="min-w-screen flex h-screen min-h-screen flex-col">
        <CommunityHeader
          toggleSidebar={() => setSidebarToggled(!sidebarToggled)}
        ></CommunityHeader>

        <div
          className={`flex h-full w-full ${width <= 900 && sidebarToggled === false ? "hidden" : "flex"}`}
        >
          <LeftSideBar isShowingAddCommunities={false}></LeftSideBar>
        </div>
      </div>
    </>
  );
}
