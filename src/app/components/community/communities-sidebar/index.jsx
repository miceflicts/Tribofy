import React from "react";
import { Plus } from "lucide-react";

export default function CommunitiesSidebar() {
  return (
    <>
      <div className="flex h-full w-[80px] flex-col items-center gap-2 border-r border-border pt-4">
        <div className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-2xl border-2 border-border">
          <div className="flex h-[48px] w-[48px] items-center justify-center rounded-lg bg-purple-700">
            <h3 className="text-primary-foreground">M</h3>
          </div>
        </div>

        <div
          className={`bg-highlight flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-lg hover:bg-accent`}
        >
          <Plus className="text-highlighted-text" size={19}></Plus>
        </div>
      </div>
    </>
  );
}
