import React from "react";
import { Plus } from "lucide-react";

export default function CommunitiesSidebar() {
  return (
    <>
      <div className="flex h-full w-[80px] flex-col items-center gap-2 border-r border-border pt-4">
        <div className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-2xl border-2 border-border">
          <div className="bg-button active:bg-button-active hover:bg-button-hover flex h-[48px] w-[48px] items-center justify-center rounded-lg">
            <h3 className="text-primary-foreground">M</h3>
          </div>
        </div>

        <div
          className={`flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-lg bg-highlight hover:bg-highlight/50`}
        >
          <Plus className="text-highlighted-text" size={19}></Plus>
        </div>
      </div>
    </>
  );
}
