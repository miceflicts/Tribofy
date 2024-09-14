"use client";

import React, { useState, useEffect } from "react";
import DiscoverMainText from "@/app/components/discover/main-text";
import DiscoverSearch from "@/app/components/discover/search";
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
import Filter from "@/app/components/community/main-section/filter";

const DiscoveryPage = () => {
  const [error, setError] = useState("");
  const [communitiesData, setCommunitiesData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const getCommunities = async (page = 1) => {
    try {
      const fetchParams = {
        page: page,
        limit: 9,
      };
      const res = await communityService.discoverCommunities(fetchParams);
      setCommunitiesData(res);
      console.log(res);
      setCurrentPage(page);
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      console.error("Error fetching communities:", errorMessage);
      setError(errorMessage);
    }
  };

  useEffect(() => {
    getCommunities();
  }, []);

  const renderPaginationItems = () => {
    const items = [];
    const totalPages = communitiesData.totalPages || 1;

    for (let i = 1; i <= totalPages; i++) {
      items.push(
        <PaginationItem key={i}>
          <PaginationLink
            href="#"
            isActive={i === currentPage}
            onClick={(e) => {
              e.preventDefault();
              getCommunities(i);
            }}
          >
            {i}
          </PaginationLink>
        </PaginationItem>,
      );
    }

    return items;
  };

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
          <DiscoverMainText />
          <DiscoverSearch />

          <div className="mt-14 flex w-full items-center justify-center gap-5">
            <Filter text={"General"}></Filter>
            <Filter text={"General"}></Filter>
            <Filter text={"General"}></Filter>
            <Filter text={"General"}></Filter>
            <Filter text={"General"}></Filter>
            <Filter text={"General"}></Filter>
          </div>

          {communitiesData.communities !== undefined ? (
            <div className="mt-4 flex h-full w-full">
              <DiscoverCards communitiesData={communitiesData} />
            </div>
          ) : (
            <div>Need to create loading state</div>
          )}

          <div className="mt-6 w-full items-center justify-center">
            {communitiesData.totalPages !== undefined ? (
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage > 1) getCommunities(currentPage - 1);
                      }}
                    />
                  </PaginationItem>
                  {renderPaginationItems()}
                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage < communitiesData.totalPages)
                          getCommunities(currentPage + 1);
                      }}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoveryPage;
