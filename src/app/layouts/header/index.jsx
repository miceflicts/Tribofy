import React from "react";
import { Tent } from "lucide-react";

export default function Header(props) {
  return (
    <>
      <header className="fixed flex w-full h-[90px] max-[810px]:h-[64px] items-center justify-center ">
        <div className="flex pl-7 pr-7 items-center justify-between fixed w-[600px] h-[54px] max-[810px]:w-full max-[810px]:h-[64px] max-[810px]:bg-black max-[810px]:rounded-none rounded-full border-[0.5px] border-[#ffffff1a] bg-[#141419]">
          <div className=" flex gap-2 items-center justify-center text-white text-xl font-black">
            <Tent size={35} strokeWidth={2} color="#ffffff"></Tent>
            <h1>Tribofy</h1>
          </div>

          <div></div>
        </div>
      </header>
    </>
  );
}
