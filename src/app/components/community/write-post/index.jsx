import React from "react";

export default function WritePost(props) {
  return (
    <>
      <div className="flex h-[80px] w-[95%] cursor-pointer items-center justify-start gap-4 rounded-xl border border-border bg-emphasis px-6">
        <div className="h-[45px] w-[45px] rounded-full bg-accent"></div>
        <h3 className="font-medium text-highlighted-text">
          Write what you are thinking
        </h3>
      </div>
    </>
  );
}
