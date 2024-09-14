import AboutCommunityPage from "@/app/layouts/about-community";
import GeneralHeader from "@/app/layouts/general/header";
import React from "react";

export default function CommunityAbout(props) {
  // caso o usuário já esteja na comunidade ir direto para a comunidade, caso contrário, about

  return (
    <>
      <div className="min-w-screen flex min-h-screen flex-col items-center">
        <GeneralHeader></GeneralHeader>

        <AboutCommunityPage></AboutCommunityPage>
      </div>
    </>
  );
}
