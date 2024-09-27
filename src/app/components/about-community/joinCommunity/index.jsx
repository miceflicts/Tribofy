"use client";

import React, { useEffect, useState } from "react";

import { userService } from "@/app/services/api";
import { useRouter } from "next/navigation";

export default function JoinCommunityModal({
  communityId,
  userId,
  communitySlug,
}) {
  const router = useRouter();

  const [error, setError] = useState("");

  const joinCommunity = async () => {
    try {
      const userAndCommunityId = {
        userId: userId,
        communityId: communityId,
      };
      const res = await userService.joinCommunity(userAndCommunityId);

      redirectToCommunity();
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      setError(errorMessage);
    }
  };

  useEffect(() => {
    joinCommunity();
  }, []);

  const redirectToCommunity = () => {
    router.push(`/pages/${communitySlug}`);
  };

  return <></>;
}
