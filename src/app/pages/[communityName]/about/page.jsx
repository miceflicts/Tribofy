"use client";

import AboutCommunityPage from "@/app/layouts/about-community";
import GeneralHeader from "@/app/layouts/general/header";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import { communityService } from "@/app/services/api";
import Page404 from "@/app/layouts/404";
export default function CommunityAbout(props) {
  const [communitySlug, setCommunitySlug] = useState("");
  const [communityData, setCommunityData] = useState({});

  const [error, setError] = useState(null);
  const [is404, setIs404] = useState(false);

  const pathname = usePathname();

  const getCommunityData = async () => {
    try {
      const fetchParams = {
        slug: communitySlug,
      };
      const res = await communityService.fetchCommunities(fetchParams);
      setCommunityData(res);

      console.log(res);
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      console.error("Error fetching communities:", errorMessage);
      setIs404(true);
      setError(errorMessage);
    }
  };

  useEffect(() => {
    if (pathname) {
      const parts = pathname.split("/");
      const communityName = parts[2];

      communityName ? setCommunitySlug(communityName) : setIs404(true);
    } else {
      setIs404(true);
    }
  }, [pathname]);

  useEffect(() => {
    communitySlug.length > 0 && getCommunityData();
  }, [communitySlug]);

  return (
    <>
      {is404 ? (
        <Page404></Page404>
      ) : (
        <div className="min-w-screen flex min-h-screen flex-col items-center">
          <GeneralHeader></GeneralHeader>
          <AboutCommunityPage></AboutCommunityPage>
        </div>
      )}
    </>
  );
}
