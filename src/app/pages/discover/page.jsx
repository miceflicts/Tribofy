"use client";

import DiscoverMainText from "@/app/components/discover/main-text";
import DiscoverSearch from "@/app/components/discover/search";
import React, { useState, useEffect } from "react";

import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid-pattern";
import DiscoverCards from "@/app/components/discover/discover-cards";

import { communityService } from "@/app/services/api";

import "./index.css";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const DiscoveryPage = () => {
  const [error, setError] = useState("");
  const [communitiesData, setCommunitiesData] = useState({});

  const getCommunities = async () => {
    try {
      const fetchParams = {
        page: 1,
        limit: 9,
      };
      const res = await communityService.discoverCommunities(fetchParams);
      setCommunitiesData(res);
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      console.error("Error creating community:", errorMessage);
      setError(errorMessage);
    }
  };

  useEffect(() => {
    getCommunities();
  }, []);

  return (
    <>
      <div className="max-w-screen min-w-screen flex h-fit min-h-screen flex-col">
        <GridPattern
          width={150}
          height={10000}
          x={-1}
          y={-1}
          className={cn(
            "min-h-full stroke-gray-400/60 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] dark:bg-gray-300/5",
          )}
        />
        <div className="z-50 mt-[50px] flex h-fit w-full flex-col items-center justify-center gap-4 p-5 font-semibold">
          <DiscoverMainText></DiscoverMainText>
          <DiscoverSearch></DiscoverSearch>

          {communitiesData.communities !== undefined ? (
            <div className="mt-14 flex h-full w-full">
              <DiscoverCards communitiesData={communitiesData}></DiscoverCards>
            </div>
          ) : (
            <>
              <div>Need to create loading state</div>
            </>
          )}

          <div className="mt-6 w-full items-center justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive={true}>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoveryPage;
