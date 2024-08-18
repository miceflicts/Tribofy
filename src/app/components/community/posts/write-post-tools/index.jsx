import React, { memo } from "react";
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

const WritePostTools = memo(({ applyFormatting, activeStyles }) => {
  const getButtonClass = (isActive) =>
    `flex max-[420px]:h-[30px] max-[420px]:w-[30px] h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-lg hover:bg-highlight ${
      isActive ? "bg-highlight" : "bg-transparent"
    }`;

  return (
    <div className="flex w-full flex-row gap-3 max-[375px]:gap-2 max-[360px]:flex-col max-[360px]:items-center max-[360px]:gap-1">
      <div className="flex h-fit gap-1">
        <div
          className={getButtonClass(activeStyles.bold)}
          onClick={() => applyFormatting("bold")}
        >
          <Bold size={20} className="text-highlighted-text" />
        </div>
        <div
          className={getButtonClass(activeStyles.italic)}
          onClick={() => applyFormatting("italic")}
        >
          <Italic size={20} className="text-highlighted-text" />
        </div>
        <div
          className={getButtonClass(activeStyles.underline)}
          onClick={() => applyFormatting("underline")}
        >
          <Underline size={20} className="text-highlighted-text" />
        </div>
      </div>
      <div className="min-h-full min-w-[1px] rounded-lg bg-border"></div>

      <div className="h-[1px] w-[40%] min-w-[110px] rounded-lg bg-border min-[361px]:hidden"></div>

      <div className="flex h-fit gap-1">
        <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-lg hover:bg-highlight max-[420px]:h-[30px] max-[420px]:w-[30px]">
          <Paperclip size={20} className="text-highlighted-text" />
        </div>
        <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-lg hover:bg-highlight max-[420px]:h-[30px] max-[420px]:w-[30px]">
          <Link size={20} className="text-highlighted-text" />
        </div>
        <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-lg hover:bg-highlight max-[420px]:h-[30px] max-[420px]:w-[30px]">
          <ChartNoAxesColumn size={20} className="text-highlighted-text" />
        </div>
        <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-lg hover:bg-highlight max-[420px]:h-[30px] max-[420px]:w-[30px]">
          <Video size={20} className="text-highlighted-text" />
        </div>
        <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-lg hover:bg-highlight max-[420px]:h-[30px] max-[420px]:w-[30px]">
          <ImagePlay size={20} className="text-highlighted-text" />
        </div>
        <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-lg hover:bg-highlight max-[420px]:h-[30px] max-[420px]:w-[30px]">
          <Smile size={20} className="text-highlighted-text" />
        </div>
      </div>
    </div>
  );
});

WritePostTools.displayName = "WritePostTools";

export default WritePostTools;
