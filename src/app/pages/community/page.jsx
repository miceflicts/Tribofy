"use client";

import useWindowDimensions from "@/app/hooks/use-window-dimensions";
import CommunityHeader from "@/app/layouts/community/header";
import LeftSideBar from "@/app/layouts/community/left-sidebar";
import React, { useState, useEffect } from "react";

export default function Community() {
  const { width, height } = useWindowDimensions();
  const [sidebarToggled, setSidebarToggled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // ou um loader/placeholder
  }

  return (
    <>
      <div className="min-w-screen flex h-screen min-h-screen flex-col">
        <CommunityHeader
          toggleSidebar={() => setSidebarToggled(!sidebarToggled)}
        ></CommunityHeader>

        <div
          className={`h-full w-full ${width >= 1024 ? "flex" : sidebarToggled ? "flex" : "hidden"}`}
        >
          <LeftSideBar isShowingAddCommunities={true}></LeftSideBar>

          <div className="bg-purple-500"></div>
        </div>
      </div>
    </>
  );
}
