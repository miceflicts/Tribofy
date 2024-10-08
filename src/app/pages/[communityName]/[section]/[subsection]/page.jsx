"use client";

import useWindowDimensions from "@/app/hooks/use-window-dimensions";
import CommunityHeader from "@/app/layouts/community/header";
import LeftSideBar from "@/app/layouts/community/left-sidebar";
import React, { useState, useEffect, useRef } from "react";

import Courses from "@/app/layouts/community/community-pages/courses";

const checkUrlForSection = (url, section) => {
  const urlParts = url.split("/");
  const sectionIndex = urlParts.indexOf(section);

  if (sectionIndex !== -1) {
    return {
      isSection: true,
      subsection: urlParts[sectionIndex + 1] || "",
    };
  }

  return {
    isSection: false,
    subsection: "",
  };
};

export default function CommunityCourse({}) {
  const { width, height } = useWindowDimensions();
  const [sidebarToggled, setSidebarToggled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isShowingAddCommunities, setIsShowingAddCommunities] = useState(true);

  const [url, setUrl] = useState("");
  const [currentSection, setCurrentSection] = useState({
    name: "",
    subsection: "",
  });

  const sidebarRef = useRef(null);

  const sections = ["classroom"];

  useEffect(() => {
    const currentUrl = window.location.href;
    setUrl(currentUrl);

    for (const section of sections) {
      const { isSection, subsection } = checkUrlForSection(currentUrl, section);
      if (isSection) {
        setCurrentSection({ name: section, subsection });
        break;
      }
    }
  }, []);

  useEffect(() => {
    console.log("Current Section:", currentSection.name);
    console.log("Subsection:", currentSection.subsection);
  }, [currentSection.name, currentSection.subsection]);

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

  /* Register clicks outside the left sidebar component, closing it */
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        width <= 1024 &&
        sidebarToggled &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setSidebarToggled(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarToggled, width]);

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

        <div className="mt-[50px] flex h-full w-full flex-row max-[1024px]:mt-[64px]">
          <div
            ref={sidebarRef}
            className={`z-10 h-full w-fit max-[1024px]:min-w-[0px] ${
              isShowingAddCommunities ? "min-w-[380px]" : "min-w-[300px]"
            } ${width >= 1024 ? "flex" : sidebarToggled ? "flex" : "hidden"}`}
          >
            <LeftSideBar
              isShowingAddCommunities={isShowingAddCommunities}
              deviceWidth={width}
            />
          </div>

          <div
            className={`flex h-full w-full justify-between px-10 pt-10 max-[1260px]:px-2 max-[900px]:px-4 ${width <= 1024 && sidebarToggled ? "opacity-30" : ""}`}
          >
            {currentSection.name ? (
              <>
                {currentSection.name === "classroom" && (
                  <Courses courseName={currentSection.subsection} />
                )}
              </>
            ) : (
              <div className="w-full">
                <h1 className="text-3xl font-bold text-primary-foreground">
                  {url.split("/").pop()}
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
