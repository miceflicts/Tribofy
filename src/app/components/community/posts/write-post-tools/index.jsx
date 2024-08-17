import React from "react";
import {
  Bold,
  Italic,
  Underline,
  Paperclip,
  Link,
  Video,
  ChartNoAxesColumn,
  Smile,
  ImagePlay,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function WritePostTools({ applyFormatting }) {
  return (
    <div className="flex w-full flex-row gap-3">
      <div className="flex h-fit gap-1">
        <div
          className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-lg hover:bg-highlight"
          onClick={() => applyFormatting("bold")}
        >
          <Bold size={20} className="text-highlighted-text" />
        </div>
        <div
          className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-lg hover:bg-highlight"
          onClick={() => applyFormatting("italic")}
        >
          <Italic size={20} className="text-highlighted-text" />
        </div>
        <div
          className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-lg hover:bg-highlight"
          onClick={() => applyFormatting("underline")}
        >
          <Underline size={20} className="text-highlighted-text" />
        </div>
      </div>
      <div className="min-h-full w-[1px] rounded-lg bg-border"></div>
      <div className="flex h-fit gap-1">
        <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-lg hover:bg-highlight">
          <Paperclip size={20} className="text-highlighted-text" />
        </div>
        <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-lg hover:bg-highlight">
          <Link size={20} className="text-highlighted-text" />
        </div>
        <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-lg hover:bg-highlight">
          <ChartNoAxesColumn size={20} className="text-highlighted-text" />
        </div>
        <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-lg hover:bg-highlight">
          <Video size={20} className="text-highlighted-text" />
        </div>
        <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-lg hover:bg-highlight">
          <ImagePlay size={20} className="text-highlighted-text" />
        </div>
        <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-lg hover:bg-highlight">
          <Smile size={20} className="text-highlighted-text" />
        </div>
      </div>
    </div>
  );
}
