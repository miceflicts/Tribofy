"use client";
import React, { useState, useEffect, useRef } from "react";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";
import { communityService } from "@/app/services/api";
import { useRouter } from "next/navigation";

export default function CreatingCommunityProgress({ communityData }) {
  const router = useRouter();
  const loadingStates = [
    { text: "Reserving your community name" },
    { text: "Setting up your unique space" },
    { text: "Adding a splash of creativity" },
    { text: "Finalizing the details" },
    { text: "Welcome to Tribofy!" },
  ];

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const createAttemptedRef = useRef(false);
  const communityCreatedRef = useRef(false);

  const loaderDuration = 1000;

  const createCommunity = async () => {
    if (createAttemptedRef.current) return;
    createAttemptedRef.current = true;

    try {
      const formattedData = {
        name: communityData.name,
        description: communityData.description,
        slug: communityData.slug,
        owner: "66be890f0e5c076022ebad05",
      };
      const res = await communityService.createCommunity(formattedData);
      console.log(res);
      communityCreatedRef.current = true;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      console.error("Error creating community:", errorMessage);
      setError(errorMessage);
    }
  };

  useEffect(() => {
    if (communityData) {
      createCommunity();
    }
  }, [communityData]);

  useEffect(() => {
    const handleComplete = () => {
      console.log("All steps completed");
      if (communityCreatedRef.current && !error) {
        router.push("/pages/dashboard");
      } else if (error) {
        setLoading(false);
      }
    };

    setTimeout(
      function () {
        handleComplete();
      },
      loaderDuration * (loadingStates.length + 1),
    );
  }, []);

  return (
    <>
      <div className="flex h-[60vh] w-full items-center justify-center">
        {error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <Loader
            loadingStates={loadingStates}
            loading={loading}
            duration={loaderDuration}
            loop={false}
          />
        )}
      </div>
    </>
  );
}
