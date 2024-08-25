import DiscoverMainText from "@/app/components/discover/main-text";
import DiscoverSearch from "@/app/components/discover/search";
import React from "react";

import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid-pattern";

const DiscoveryPage = () => {
  return (
    <>
      <div className="flex min-h-screen w-screen">
        <GridPattern
          width={150}
          height={10000}
          x={-1}
          y={-1}
          className={cn(
            "stroke-gray-400/60 [mask-image:linear-gradient(to_bottom_right,white,transparent)] dark:bg-gray-300/5 dark:[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]",
          )}
        />
        <div className="z-50 mt-[50px] flex h-fit w-full flex-col items-center justify-center gap-4 p-5 font-semibold">
          <DiscoverMainText></DiscoverMainText>
          <DiscoverSearch></DiscoverSearch>
        </div>
      </div>
    </>
  );
};

export default DiscoveryPage;
