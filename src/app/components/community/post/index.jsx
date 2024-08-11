import React from "react";
import "./index.css";

import { ThumbsUp, MessageSquare } from "lucide-react";

export default function Post(props) {
  return (
    <>
      <div className="flex min-h-fit w-[95%] flex-col gap-4 rounded-xl border border-border bg-emphasis px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="h-[45px] w-[45px] rounded-full bg-accent"></div>

          <div className="flex flex-col">
            <h4 className="text-[0.9rem] font-semibold">Nicolas</h4>
            <span className="text-sm text-highlighted-text">
              1d ago in <strong>Ask for advice</strong>
            </span>
          </div>
        </div>

        <div className="flex h-fit w-full flex-col gap-2">
          <h3 className="breakOneLine text-[1.2rem] font-bold">
            Guys under 18 years old ask for advice on this post. Guys over 18
            years old, sdsdsad dsadasd dasdsa aaaa sadsad
          </h3>
          <h4 className="text-[0.9rem] text-highlighted-text">
            If you're under 18 years old, scroll down and write a comment asking
            for advice on something you're really struggling with right now. If
            you're OVER 18 years old, scroll down and reply to some of the dsad
            asdas das dasd as dasdas
          </h4>
        </div>

        <div className="mb-1 flex h-fit w-full items-center gap-5">
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

          <div className="ml-2 flex items-center gap-1">
            <div className="h-[23px] w-[23px] rounded-full bg-accent"></div>
            <div className="h-[23px] w-[23px] rounded-full bg-accent"></div>
            <div className="h-[23px] w-[23px] rounded-full bg-accent"></div>
            <div className="h-[23px] w-[23px] rounded-full bg-accent"></div>
          </div>

          <span className="text-center text-[0.8rem] font-semibold text-primary">
            New comment 10 minutes ago
          </span>
        </div>
      </div>
    </>
  );
}
