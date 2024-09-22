"use client";

import AboutCommunityPage from "@/app/layouts/about-community";
import GeneralHeader from "@/app/layouts/general/header";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function CommunityAbout(props) {
  const [is404, setIs404] = useState(false);
  const [communitySlug, setCommunitySlug] = useState("");

  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      const parts = pathname.split("/");
      const communityName = parts[2];
      setCommunitySlug(communityName);
    } else {
      setIs404(true);
    }
  }, [pathname]);

  return (
    <>
      {is404 ? (
        <div>404</div>
      ) : (
        <div className="min-w-screen flex min-h-screen flex-col items-center">
          <GeneralHeader></GeneralHeader>
          <AboutCommunityPage></AboutCommunityPage>
        </div>
      )}
    </>
  );
}
