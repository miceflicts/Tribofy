"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";

export default function CreatingCommunityProgress(props) {
  const loadingStates = [
    {
      text: "Reserving your community name",
    },
    {
      text: "Setting up your unique space",
    },
    {
      text: "Adding a splash of creativity",
    },
    {
      text: "Finalizing the details",
    },
    {
      text: "Welcome to Tribofy!",
    },
  ];

  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="flex h-[60vh] w-full items-center justify-center">
        {/* Core Loader Modal */}
        <Loader
          loadingStates={loadingStates}
          loading={loading}
          duration={2000}
          loop={false}
        />

        {/* The buttons are for demo only, remove it in your actual code ⬇️ */}
        <button
          onClick={() => setLoading(true)}
          className="mx-auto flex h-10 items-center justify-center rounded-lg bg-[#39C3EF] px-8 text-sm font-medium text-black transition duration-200 hover:bg-[#39C3EF]/90 md:text-base"
          style={{
            boxShadow:
              "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
          }}
        >
          Click to load
        </button>

        {loading && (
          <button
            className="fixed right-4 top-4 z-[120] text-text-default"
            onClick={() => setLoading(false)}
          >
            <IconSquareRoundedX className="h-10 w-10" />
          </button>
        )}
      </div>
    </>
  );
}
