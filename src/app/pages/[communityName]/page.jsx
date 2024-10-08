"use client";

import useWindowDimensions from "@/app/hooks/use-window-dimensions";
import CommunityHeader from "@/app/layouts/community/header";
import LeftSideBar from "@/app/layouts/community/left-sidebar";
import MainFrame from "@/app/layouts/community/main-frame";
import React, { useState, useEffect, useRef } from "react";

import { usePathname } from "next/navigation";

export default function Community() {
  const { width, height } = useWindowDimensions();
  const [sidebarToggled, setSidebarToggled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isShowingAddCommunities, setIsShowingAddCommunities] = useState(true);
  const [communitySlug, setCommunitySlug] = useState("");

  const [communityData, setcommunityData] = useState(null);

  const sidebarRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      const parts = pathname.split("/");
      const communityName = parts[2];

      communityName ? setCommunitySlug(communityName) : setIs404(true);
    } else {
      setIs404(true);
    }
  }, [pathname]);

  // Continuar a partir daqui
  const getCommunityData = async () => {
    try {
      const fetchParams = {
        slug: communitySlug,
      };
      const res = await communityService.fetchCommunities(fetchParams);
      setCommunityData(res);
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      setIs404(true);
      setError(errorMessage);
    }
  };

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

  const toggleSidebar = () => {
    setSidebarToggled((prev) => !prev);
  };

  if (!isMounted) {
    return null; // ou um loader/placeholder
  }

  return (
    <>
      <div className="min-w-screen flex h-screen min-h-screen flex-col">
        <CommunityHeader
          toggleSidebar={toggleSidebar}
          sidebarToggled={sidebarToggled}
        />

        <div className="mt-[50px] flex h-full w-full flex-row max-lg:mt-[64px]">
          <div
            className={`z-10 h-full w-fit max-lg:min-w-[0px] ${
              isShowingAddCommunities ? "min-w-[380px]" : "min-w-[300px]"
            } ${width >= 1024 ? "flex" : sidebarToggled ? "flex" : "hidden"}`}
          >
            <LeftSideBar
              isShowingAddCommunities={isShowingAddCommunities}
              deviceWidth={width}
              toggleSidebar={toggleSidebar}
              sidebarToggled={sidebarToggled}
              width={width}
            />
          </div>

          <div
            className={`flex h-full w-full justify-between px-10 pt-10 max-[1260px]:px-2 max-[900px]:px-4`}
          >
            <MainFrame />
          </div>
        </div>
      </div>
    </>
  );
}
