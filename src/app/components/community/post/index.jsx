import React from "react";
import "./index.css";

import { ThumbsUp, MessageSquare, Pin } from "lucide-react";

export default function Post({ isPinned }) {
  return (
    <>
      <div className="flex min-h-fit w-[95%] flex-col">
        {/* Pinned post info */}
        <div
          className={`${isPinned ? "flex" : "hidden"} h-[40px] w-full items-center gap-2 rounded-t-xl bg-primary px-8 text-highlighted-text`}
        >
          <Pin size={20} className="rotate-45 text-secondary"></Pin>
          <span className="text-[0.9rem] font-bold text-secondary">Pinned</span>
        </div>

        {/* Post structure */}
        <div
          className={`flex min-h-fit w-full flex-col gap-4 ${isPinned ? "rounded-t-none" : ""} cursor-pointer rounded-xl border border-border bg-emphasis px-6 py-4 hover:bg-highlight/50`}
        >
          <div className="flex items-center gap-2">
            <div className="h-[45px] w-[45px] rounded-full bg-accent"></div>

            <div className="flex flex-col">
              <h4 className="text-[0.9rem] font-semibold">Nicolas</h4>
              <span className="text-sm text-highlighted-text">
                1d ago in <strong>Ask for advice</strong>
              </span>
            </div>
          </div>

          {/* Text preview */}
          <div className="flex h-fit w-full flex-col gap-2">
            <h3 className="breakOneLine text-[1.2rem] font-bold">
              Guys under 18 years old ask for advice on this post. Guys over 18
              years old, sdsdsad dsadasd dasdsa aaaa sadsad
            </h3>
            <h4 className="text-[0.9rem] text-highlighted-text">
              If you're under 18 years old, scroll down and write a comment
              asking for advice on something you're really struggling with right
              now. If you're OVER 18 years old, scroll down and reply to some of
              the dsad asdas das dasd as dasdas
            </h4>
          </div>

          <div className="mb-1 flex h-fit w-full items-center gap-5 max-[450px]:flex-col max-[450px]:gap-1">
            <div className="flex w-fit items-center gap-5 max-[450px]:w-full">
              <div className="flex items-center gap-2">
                <ThumbsUp
                  size={19}
                  className="cursor-pointer text-highlighted-text"
                ></ThumbsUp>
                <span className="text-sm font-semibold text-highlighted-text">
                  15
                </span>
              </div>

              <div className="flex items-center gap-2">
                <MessageSquare
                  size={19}
                  className="cursor-pointer text-highlighted-text"
                ></MessageSquare>
                <span className="text-sm font-semibold text-highlighted-text">
                  15
                </span>
              </div>

              {/* Users who commented */}
              <div className="ml-2 flex items-center gap-1">
                <div className="h-[23px] w-[23px] rounded-full bg-accent"></div>
                <div className="h-[23px] w-[23px] rounded-full bg-accent"></div>
                <div className="h-[23px] w-[23px] rounded-full bg-accent"></div>
                <div className="h-[23px] w-[23px] rounded-full bg-accent"></div>
              </div>
            </div>

            <span className="text-center text-[0.8rem] font-semibold text-primary max-[450px]:mt-3">
              New comment 10 minutes ago
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
