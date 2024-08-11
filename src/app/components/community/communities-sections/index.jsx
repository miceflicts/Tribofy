import React from "react";
import { ChevronDown } from "lucide-react";

export default function CommunitiesSections() {
  return (
    <>
      <div className="flex h-[300px] w-full flex-col">
        <div className="flex h-[70px] w-full cursor-pointer items-center justify-between border-b border-border px-5">
          <h3 className="text-xl font-semibold">Tribofy</h3>

          <ChevronDown
            size={19}
            className="text-highlighted-text"
          ></ChevronDown>
        </div>

        <div className="mt-[1rem] flex h-fit w-full flex-col gap-3 px-4">
          <div className="flex h-fit w-full flex-col">
            <div className="bg-highlight h-[40px] w-full rounded-lg"></div>
          </div>
          <div className="flex h-fit w-full flex-col">
            <div className="bg-highlight h-[40px] w-full rounded-lg"></div>
          </div>
          <div className="flex h-fit w-full flex-col">
            <div className="bg-highlight h-[40px] w-full rounded-lg"></div>
          </div>
        </div>
      </div>
    </>
  );
}
