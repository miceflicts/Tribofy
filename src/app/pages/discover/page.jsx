import DiscoverMainText from "@/app/components/discover/main-text";
import DiscoverSearch from "@/app/components/discover/search";
import React from "react";

import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid-pattern";
import DiscoverCards from "@/app/components/discover/discover-cards";

import "./index.css";

const DiscoveryPage = () => {
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

          <div className="mt-14 flex h-full w-full">
            <DiscoverCards></DiscoverCards>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoveryPage;
