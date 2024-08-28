import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function DiscoverSearch(props) {
  return (
    <div className="mt-8 flex h-fit w-full justify-center">
      <div className="relative w-[700px]">
        <Input
          className="w-full rounded-xl py-[1.3rem] pr-10"
          placeholder="Search for communities names or keywords"
          type="text"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <div className="flex h-[2rem] w-[2.5rem] items-center justify-center rounded-xl bg-emphasis">
            <Search className="text-highlighted-text" size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}
