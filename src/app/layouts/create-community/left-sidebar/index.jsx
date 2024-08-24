import CompanyLogo from "@/app/components/general/company-logo";
import React from "react";
import CreateCommunityProgress from "../progress";
import Link from "next/link";

import { ArrowLeft } from "lucide-react";

export default function CreateCommunityLeftSidebar({ activeStep }) {
  return (
    <>
      <div className="ml-2 flex h-[98vh] w-[450px] flex-col justify-between gap-20 rounded-2xl border border-border bg-emphasis pb-5 pl-10 pt-10">
        <div className="flex h-fit w-full flex-col gap-20">
          <CompanyLogo
            svgSize={40}
            textSize={"text-[1.6rem]"}
            color="text-gray-500 dark:text-gray-300"
          />

          <CreateCommunityProgress
            activeStep={activeStep}
          ></CreateCommunityProgress>
        </div>

        <Link
          href={"/pages/landing-page"}
          className="flex cursor-pointer items-end justify-start gap-3 text-text-default hover:text-text-default/80 dark:hover:text-text-default/90"
        >
          <ArrowLeft size={20} className="cursor-pointer"></ArrowLeft>
          <span className="text-sm">Go back to home</span>
        </Link>
      </div>
    </>
  );
}
