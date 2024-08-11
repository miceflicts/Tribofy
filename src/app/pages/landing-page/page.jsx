import LandingPageHeader from "@/app/layouts/landing-page/header";
import React from "react";

export default function LandingPage() {
  return (
    <>
      <main className="flex flex-col min-w-screen min-h-screen">
        <LandingPageHeader></LandingPageHeader>

        <div className="mt-[180px]">This is the landing page</div>
      </main>
    </>
  );
}
