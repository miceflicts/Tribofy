"use client";

import MainSectionBanner from "@/app/components/community/main-section/banner";
import Filter from "@/app/components/community/main-section/filter";
import Post from "@/app/components/community/posts/post";
import WritePost from "@/app/components/community/posts/write-post";
import React, { useEffect, useState } from "react";

import { postService } from "@/app/services/api";

export default function MainFrame() {
  // Todo, fazer o sistema de filtros ser funcional

  const getPosts = async () => {
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

  return (
    <>
      <div className="flex w-full justify-between gap-4">
        <div className="flex h-fit w-full flex-col items-center justify-center gap-5">
          <MainSectionBanner></MainSectionBanner>
          <WritePost></WritePost>
          <div className="mb-2 mt-4 flex h-[50px] w-[95%] cursor-pointer items-center justify-start gap-4">
            <Filter text={"General"}></Filter>
            <Filter text={"General"}></Filter>
            <Filter text={"General"}></Filter>
          </div>

          <Post isPinned={true}></Post>
          <Post isPinned={false}></Post>
          <Post isPinned={false}></Post>
        </div>

        <div className="flex h-[90%] min-w-[270px] rounded-xl border border-border bg-emphasis max-[850px]:hidden"></div>
      </div>
    </>
  );
}
