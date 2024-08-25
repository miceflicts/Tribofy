"use client";

import GetUserSession from "@/app/components/general/user-session";
import LandingPageHeader from "@/app/layouts/landing-page/header";
import React from "react";

export default function LandingPage() {
  const handleOnGetSession = (value) => {
    console.log(value);
  };

  return (
    <>
      <GetUserSession onGetSession={handleOnGetSession}></GetUserSession>

      <main className="min-w-screen flex min-h-screen flex-col">
        <LandingPageHeader></LandingPageHeader>

        <div className="mt-[180px]">This is the landing page</div>
      </main>
    </>
  );
}
