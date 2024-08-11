"use client";

import React from "react";
import { Command, Bell, MessageCircleMore, Search, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import ThemeToggleButton from "@/app/components/general/theme-toggle-button";

export default function CommunityHeader() {
  return (
    /* Community page header */
    <header className="flex h-[50px] w-full max-[900px]:h-[64px]">
      <div className="bg-emphasis flex h-full w-full items-center justify-between border-b border-border pl-7 pr-7">
        {/* Keyboard shortcuts / hamburger div */}
        <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-lg hover:bg-secondary max-[900px]:h-[45px] max-[900px]:w-[45px]">
          <Command className="text-foreground max-[900px]:hidden" size={19} />
          <Menu className="h-[30px] w-[30px] text-foreground min-[900px]:hidden"></Menu>
        </div>

        {/* Search div */}
        <div className="relative max-[900px]:hidden">
          <Search
            className="absolute left-[0.8rem] top-1/2 z-10 -translate-y-1/2 transform text-foreground"
            size={18}
          ></Search>
          <Input
            type="email"
            placeholder="Search"
            className="flex h-[32px] w-[480px] rounded-md border-border bg-background pl-10 text-foreground focus-visible:ring-transparent"
          />
        </div>

        {/* Community logo on small devices */}
        <div className="flex h-full w-fit items-center min-[900px]:hidden">
          <h2 className="text-2xl font-bold">Tribofy</h2>
        </div>

        {/* Right items on big screen */}
        <div className="flex items-center gap-6">
          <div className="flex items-center max-[900px]:hidden">
            <ThemeToggleButton />

            <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-lg hover:bg-secondary">
              <MessageCircleMore className="text-foreground" size={19} />
              <span className="sr-only">See your messages</span>
            </div>

            <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-lg hover:bg-secondary">
              <Bell className="text-foreground" size={19} />
              <span className="sr-only">See your notifications</span>
            </div>
          </div>

          {/* User Profile */}
          <div className="h-[34px] w-[34px] rounded-md bg-accent"></div>
        </div>
      </div>
    </header>
  );
}
