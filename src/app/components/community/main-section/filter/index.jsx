import React from "react";

export default function Filter({ text }) {
  return (
    <>
      <div className="flex cursor-pointer items-center justify-center rounded-3xl border-[2px] border-border bg-background px-4 py-3 hover:bg-card-hover">
        <h4 className="text-sm text-highlighted-text">{text}</h4>
      </div>
    </>
  );
}
