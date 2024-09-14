import React from "react";

export default function AboutCommunityImages(props) {
  return (
    <>
      <div className="flex h-fit w-full flex-col gap-5 rounded-2xl">
        <div className="aspect-video w-full rounded-2xl bg-accent"></div>

        <div className="flex flex-row gap-4">
          <div className="aspect-video w-[140px] rounded-2xl border-[3px] border-border bg-black/30"></div>
          <div className="aspect-video w-[140px] rounded-2xl bg-black/30"></div>
          <div className="aspect-video w-[140px] rounded-2xl bg-black/30"></div>
          <div className="aspect-video w-[140px] rounded-2xl bg-black/30"></div>
        </div>
      </div>
    </>
  );
}
