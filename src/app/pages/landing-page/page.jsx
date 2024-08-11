import Header from "@/app/layouts/header";
import React from "react";

export default function LandingPage() {
  return (
    <>
      <main className="flex flex-col min-w-screen min-h-screen">
        <Header></Header>

        <div className="mt-[180px]">This is the landing page</div>
      </main>
    </>
  );
}
