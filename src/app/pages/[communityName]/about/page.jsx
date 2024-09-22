"use client";

import AboutCommunityPage from "@/app/layouts/about-community";
import GeneralHeader from "@/app/layouts/general/header";
import { useRouter, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import GetUserSession from "@/app/components/general/user-session";

import { communityService } from "@/app/services/api";
import { userService } from "@/app/services/api";

import Page404 from "@/app/layouts/404";

export default function CommunityAbout(props) {
  const [userData, setUserData] = useState({});

  const [communitySlug, setCommunitySlug] = useState("");
  const [communityData, setCommunityData] = useState({});
  const [isAlreadyInCommunity, setIsAlreadyInCommunity] = useState(false);

  const [error, setError] = useState(null);
  const [is404, setIs404] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const handleOnGetSession = (value) => {
    setUserData(value);
  };

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

  const isUserAlreadyInCommunity = async () => {
    try {
      const fetchParams = {
        userId: userData.user.id,
        communityId: communityData._id,
      };

      const res = await userService.isInCommunity(fetchParams);
      setIsAlreadyInCommunity(res);
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      console.error(
        "Error checking if user is already in community:",
        errorMessage,
      );
      setError(errorMessage);
    }
  };

  useEffect(() => {
    if (isAlreadyInCommunity.isInCommunity) {
      router.push(`/pages/${communitySlug}`);
    }
  }, [isAlreadyInCommunity]);

  useEffect(() => {
    if (userData.user && communityData._id !== undefined) {
      isUserAlreadyInCommunity();
    }
  }, [communityData]);

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
      <GetUserSession onGetSession={handleOnGetSession}></GetUserSession>

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
