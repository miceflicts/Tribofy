import React from "react";

export default function MainFrame() {
  return (
    <>
      <div className="flex w-full justify-between gap-4">
        <div className="flex h-fit w-full items-center justify-center">
          <div className="h-[300px] w-[95%] rounded-xl bg-purple-300"></div>
        </div>

        <div className="flex h-[90%] w-[15%] min-w-[200px] rounded-xl border border-border bg-emphasis max-[750px]:hidden"></div>
      </div>
    </>
  );
}
