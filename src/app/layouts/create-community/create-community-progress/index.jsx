import React from "react";

import { Rocket, Pencil, Award } from "lucide-react";

export default function CreateCommunityProgress() {
  return (
    // borda ativa - highlight
    <>
      <div className="flex flex-col">
        <div className="flex h-fit w-fit gap-4">
          <div className="flex flex-col items-center justify-center">
            <div className="flex h-[45px] w-[45px] items-center justify-center rounded-lg border border-border bg-background">
              <Rocket className="text-highlighted-text" size={20} />
            </div>
            <div className="min-h-[50px] max-w-[0.5px] rounded-lg border border-border"></div>
          </div>
          <div className="flex flex-col text-sm font-medium">
            <h4 className="text-text-default">Basic details</h4>
            <span className="text-highlighted-text">
              Learn more about tribofy communities
            </span>
          </div>
        </div>

        <div className="flex h-fit w-fit gap-4">
          <div className="flex flex-col items-center justify-center">
            <div className="flex h-[45px] w-[45px] items-center justify-center rounded-lg border border-border bg-background">
              <Pencil className="text-highlighted-text" size={20} />
            </div>
            <div className="min-h-[50px] max-w-[0.5px] rounded-lg border border-border"></div>
          </div>
          <div className="flex flex-col text-sm font-medium">
            <h4 className="text-text-default">Basic details</h4>
            <span className="text-highlighted-text">
              Learn more about tribofy communities
            </span>
          </div>
        </div>

        <div className="flex h-fit w-fit gap-4">
          <div className="flex flex-col items-center justify-center">
            <div className="flex h-[45px] w-[45px] items-center justify-center rounded-lg border border-border bg-background">
              <Award className="text-highlighted-text" size={20} />
            </div>
          </div>
          <div className="flex flex-col text-sm font-medium">
            <h4 className="text-text-default">Basic details</h4>
            <span className="text-highlighted-text">
              Learn more about tribofy communities
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
