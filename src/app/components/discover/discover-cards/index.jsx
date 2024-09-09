import React from "react";

export default function DiscoverCards({ communitiesData }) {
  return (
    <div className="max-w-screen container mx-auto w-full overflow-x-hidden px-4">
      <div className="flex flex-wrap justify-center gap-14">
        {communitiesData.communities.map((community, index) => (
          <div
            key={index}
            className="flex h-[400px] w-full max-w-[380px] cursor-pointer flex-col rounded-xl border border-border bg-card hover:bg-card-hover sm:w-[calc(50%-28px)] xl:w-[380px]"
          >
            <div className="min-h-[180px] w-full rounded-t-xl bg-slate-600"></div>

            <div className="flex h-full w-full flex-col justify-between gap-4 px-5 pt-5">
              <div className="flex items-center gap-3">
                <div className="h-[45px] w-[45px] rounded-lg bg-accent"></div>

                <span className="text-base font-extrabold text-highlighted-text">
                  {community.name}
                </span>
              </div>

              <span className="text-base font-normal text-highlighted-text">
                {community.description}
              </span>

              <div className="mb-5 flex items-center gap-3 text-base font-normal text-highlighted-text">
                <span>190k Members</span>
                <span>-</span>
                <span className="font-bold">Paid</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
