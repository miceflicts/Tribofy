"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import CompanyLogo from "@/app/components/general/company-logo";
import { Input } from "@/components/ui/input";
import useAutosizeTextArea from "@/app/hooks/use-autosize-text-area";

export default function CommunityDetailsPage() {
  const [communityTitle, setCommunityTitle] = useState("");
  const [communityDescription, setCommunityDescriptionValue] = useState("");
  const [communitySlug, setCommunitySlug] = useState("");
  const [isSlugEdited, setIsSlugEdited] = useState(false);
  const communityAreaRef = useRef(null);

  useEffect(() => {
    console.log(communityTitle);
    if (!isSlugEdited) {
      updateCommunitySlug(communityTitle);
    }
  }, [communityTitle]);

  useEffect(() => {
    console.log(communityDescription);
  }, [communityDescription]);

  useAutosizeTextArea(communityAreaRef.current, communityDescription);

  const handleCommunityDescriptionChange = (evt) => {
    const val = evt.target?.value;
    if (val.length <= 500) {
      setCommunityDescriptionValue(val);
    }
  };

  const handleCommunityTitleChange = (evt) => {
    const val = evt.target?.value;
    if (val.length <= 30) {
      setCommunityTitle(val);
      if (!isSlugEdited) {
        updateCommunitySlug(val);
      }
    }
  };

  const handleCommunitySlugChange = (evt) => {
    const val = evt.target?.value.toLowerCase().replace(/\s+/g, "-");
    if (val.length <= 30) {
      setCommunitySlug(val);
      setIsSlugEdited(true);
    }
  };

  const updateCommunitySlug = (title) => {
    const slug = title.toLowerCase().replace(/\s+/g, "-");
    setCommunitySlug(slug);
    setIsSlugEdited(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar os detalhes da comunidade
    console.log({
      communityTitle,
      communityDescription,
      communitySlug,
    });
  };

  useEffect(() => {
    if (communityAreaRef.current) {
      communityAreaRef.current.style.height = `${communityAreaRef.current.scrollHeight}px`;
    }
  }, [communityDescription]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-10">
      <div className="flex h-fit w-full flex-col items-center justify-center gap-3">
        <CompanyLogo svgSize={40} color="text-text-default" noText={true} />
        <div className="flex w-fit flex-col items-center gap-1">
          <h1 className="text-3xl font-semibold text-text-default">
            Shape Your Unique Space
          </h1>
          <h3 className="font-normal text-highlighted-text">
            Every detail counts. Craft a community that's as unique as you are
          </h3>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex h-fit w-[600px] flex-col items-center justify-center gap-6"
      >
        <div className="flex w-full flex-col">
          <Input
            label="Community Title"
            value={communityTitle}
            onChange={handleCommunityTitleChange}
            className={`flex w-full rounded-md border-border bg-background py-6 text-foreground focus-visible:ring-transparent ${
              communityTitle.length > 30
                ? "border-destructive text-destructive"
                : ""
            }`}
            placeholder="Community Name"
          />
          <div className="flex w-full justify-between">
            <span
              className={`pl-4 pt-1 text-[0.8rem] ${
                communityTitle.length > 30
                  ? "text-destructive"
                  : "text-text-gray"
              }`}
            >
              {communityTitle.length >= 3
                ? "You can change this later"
                : "Community name is too short"}
            </span>
            <span
              className={`pr-1 pt-1 text-[0.8rem] ${
                communityTitle.length > 30
                  ? "text-destructive"
                  : "text-text-gray"
              }`}
            >
              {communityTitle.length + " / 30"}
            </span>
          </div>
        </div>

        <div className="flex w-full flex-col">
          <textarea
            onChange={handleCommunityDescriptionChange}
            placeholder="Describe your community"
            className={`flex h-10 w-full resize-none overflow-hidden rounded-md border border-border bg-background px-3 py-5 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0 ${
              communityDescription.length > 500
                ? "border-destructive text-destructive"
                : ""
            }`}
            ref={communityAreaRef}
            rows={1}
            value={communityDescription}
          />
          <div className="flex w-full justify-between">
            <span
              className={`pl-4 pt-1 text-[0.8rem] ${
                communityDescription.length > 500
                  ? "text-destructive"
                  : "text-text-gray"
              }`}
            >
              {communityDescription.length >= 1
                ? "You can change this later"
                : "Community description is required"}
            </span>
            <span
              className={`pr-1 pt-1 text-[0.8rem] ${
                communityDescription.length > 500
                  ? "text-destructive"
                  : "text-text-gray"
              }`}
            >
              {communityDescription.length + " / 500"}
            </span>
          </div>
        </div>

        <div className="flex w-full flex-col">
          <Input
            label="Community URL"
            value={communitySlug}
            onChange={handleCommunitySlugChange}
            className={`flex w-full rounded-md border-border bg-background py-6 text-foreground focus-visible:ring-transparent ${
              communitySlug.length > 30
                ? "border-destructive text-destructive"
                : ""
            }`}
            placeholder="Community Url"
          />
          <div className="flex w-full justify-between">
            <span
              className={`pl-4 pt-1 text-[0.8rem] ${
                communitySlug.length > 30
                  ? "text-destructive"
                  : "text-text-gray"
              }`}
            >
              {communitySlug.length >= 3
                ? "You can change your community url later"
                : "Community url is too short"}
            </span>
            <span
              className={`pr-1 pt-1 text-[0.8rem] ${
                communitySlug.length > 30
                  ? "text-destructive"
                  : "text-text-gray"
              }`}
            >
              {communitySlug.length + " / 30"}
            </span>
          </div>
        </div>

        <Button className="mt-5 w-[60%] bg-button py-6 text-button-text hover:bg-button-hover active:bg-button-active">
          Continue
        </Button>
      </form>
    </div>
  );
}
