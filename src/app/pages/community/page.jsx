"use client";

import useWindowDimensions from "@/app/hooks/use-window-dimensions";
import CommunityHeader from "@/app/layouts/community/header";
import LeftSideBar from "@/app/layouts/community/left-sidebar";
import MainFrame from "@/app/layouts/community/main-frame";
import React, { useState, useEffect } from "react";

export default function Community() {
  const { width, height } = useWindowDimensions();
  const [sidebarToggled, setSidebarToggled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const [isShowingAddCommunities, setIsShowingAddCommunities] = useState(true);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (width <= 1260) {
      setIsShowingAddCommunities(false);
    } else {
      setIsShowingAddCommunities(true);
    }
  }, [width]);

  if (!isMounted) {
    return null; // ou um loader/placeholder
  }

  return (
    <>
      <div className="min-w-screen flex h-screen min-h-screen flex-col">
        <CommunityHeader
          toggleSidebar={() => setSidebarToggled(!sidebarToggled)}
        ></CommunityHeader>

        <div className="mt-[50px] flex h-full w-full flex-row max-[1024px]:mt-[64px]">
          <div
            className={`h-full w-fit ${isShowingAddCommunities ? "min-w-[380px]" : "min-w-[300px]"} ${width >= 1024 ? "flex" : sidebarToggled ? "flex" : "hidden"}`}
          >
            <LeftSideBar
              isShowingAddCommunities={isShowingAddCommunities}
            ></LeftSideBar>
          </div>

          <div className="flex h-full w-full justify-between px-10 pt-10 max-[1260px]:px-2 max-[900px]:px-4">
            <MainFrame></MainFrame>
          </div>
        </div>
      </div>
    </>
  );
}
