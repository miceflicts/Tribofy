"use client";

import React from "react";
import { Command, Bell, MessageCircleMore, Moon, Sun } from "lucide-react";
import { Input } from "@/components/ui/input";
import ThemeToggleButton from "@/app/components/general/theme-toggle-button";

export default function CommunityHeader() {
  return (
    <>
      <header className="flex h-[50px] w-full">
        <div className="flex h-[50px] w-full items-center justify-between border-b border-[#42464D] bg-[#252525] pl-7 pr-7">
          <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-lg hover:bg-gray-700">
            <Command color="#e4e7eb" size={19}></Command>
          </div>

          <div>
            <Input
              type="email"
              placeholder="Email"
              className="h-[32px] w-[480px] rounded-md border border-[#42464D]"
            />
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center">
              <ThemeToggleButton></ThemeToggleButton>

              <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-lg hover:bg-gray-700">
                <MessageCircleMore
                  color="#e4e7eb"
                  size={19}
                ></MessageCircleMore>
              </div>

              <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-lg hover:bg-gray-700">
                <Bell color="#e4e7eb" size={19}></Bell>
              </div>
            </div>

            <div className="h-[34px] w-[34px] rounded-md bg-orange-300"></div>
          </div>
        </div>
      </header>
    </>
  );
}
