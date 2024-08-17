import React from "react";

export default function Filter({ text }) {
  return (
    <>
      <div className="hover:bg-card-hover flex cursor-pointer items-center justify-center rounded-3xl border-[2px] border-border bg-card px-4 py-3">
        <h4 className="text-sm text-highlighted-text">{text}</h4>
      </div>
    </>
  );
}
