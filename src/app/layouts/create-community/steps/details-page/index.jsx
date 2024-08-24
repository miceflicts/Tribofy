"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import CompanyLogo from "@/app/components/general/company-logo";
import { Input } from "@/components/ui/input";
import useAutosizeTextArea from "@/app/hooks/use-autosize-text-area";

import { communityService } from "@/app/services/api";

export default function CommunityDetailsPage({ onFormSubmit }) {
  const [communityTitle, setCommunityTitle] = useState("");
  const [communityDescription, setCommunityDescriptionValue] = useState("");
  const [communitySlug, setCommunitySlug] = useState("");
  const [isSlugEdited, setIsSlugEdited] = useState(false);

  const [isCheckingIfCommunityExists, setIsCheckingIfCommunityExists] =
    useState(false);

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    slug: "",
  });

  const communityAreaRef = useRef(null);

  useEffect(() => {
    if (!isSlugEdited) {
      updateCommunitySlug(communityTitle);
    }
  }, [communityTitle]);

  useAutosizeTextArea(communityAreaRef.current, communityDescription);

  const handleCommunityDescriptionChange = (evt) => {
    const val = evt.target?.value;
    if (val.length <= 500) {
      setCommunityDescriptionValue(val);
      setErrors((prev) => ({ ...prev, description: "" }));
    }
  };

  const handleCommunityTitleChange = (evt) => {
    const val = evt.target?.value;
    if (val.length <= 30) {
      setCommunityTitle(val);
      if (!isSlugEdited) {
        updateCommunitySlug(val);
      }
      setErrors((prev) => ({ ...prev, title: "" }));
    }
  };

  const handleCommunitySlugChange = (evt) => {
    const val = evt.target?.value.toLowerCase().replace(/\s+/g, "-");
    if (val.length <= 30) {
      setCommunitySlug(val);
      setIsSlugEdited(true);
      setErrors((prev) => ({ ...prev, slug: "" }));
    }
  };

  const updateCommunitySlug = (title) => {
    const slug = title.toLowerCase().replace(/\s+/g, "-");
    setCommunitySlug(slug);
    setIsSlugEdited(false);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { title: "", description: "", slug: "" };

    if (communityTitle.length < 3) {
      newErrors.title = "Community name is too short";
      isValid = false;
    }

    if (communityDescription.length === 0) {
      newErrors.description = "Community description is required";
      isValid = false;
    }

    if (communitySlug.length < 3) {
      newErrors.slug = "Community url is too short";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const checkIfCommunityExists = async (communityTitle, communitySlug) => {
    setIsCheckingIfCommunityExists(true);
    try {
      const communityData = { name: communityTitle, slug: communitySlug };
      await communityService.checkIfCommunityExists(communityData);
      handleOnNewCommunity();
    } catch (error) {
      /* console.error(error.response?.data?.message); */
      const errorMessage = error.response?.data?.message || "";

      const errorTypes = {
        name: "name",
        url: "url",
        both: "name and url",
      };

      const updateErrors = (type) => {
        setErrors((prev) => ({
          ...prev,
          title:
            type !== "url"
              ? "A community with this name already exists"
              : prev.title,
          slug:
            type !== "name"
              ? "A community with this url already exists"
              : prev.slug,
        }));
      };

      if (errorMessage.includes(errorTypes.both)) {
        updateErrors("both");
      } else if (errorMessage.includes(errorTypes.name)) {
        updateErrors("name");
      } else if (errorMessage.includes(errorTypes.url)) {
        updateErrors("url");
      }
    } finally {
      setIsCheckingIfCommunityExists(false);
    }
  };

  const handleOnNewCommunity = () => {
    if (typeof onFormSubmit === "function") {
      onFormSubmit({ communityTitle, communityDescription, communitySlug });
    } else {
      console.error("onFormSubmit is not a function");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (typeof onFormSubmit === "function") {
        checkIfCommunityExists(communityTitle, communitySlug);
      } else {
        console.error("onFormSubmit is not a function");
      }
    }
  };

  useEffect(() => {
    if (communityAreaRef.current) {
      communityAreaRef.current.style.height = `${communityAreaRef.current.scrollHeight}px`;
    }
  }, [communityDescription]);

  return (
    <div className="flex max-h-screen w-full min-w-[40vw] flex-col items-center justify-center overflow-y-hidden p-6 sm:p-8 md:p-8 lg:p-10">
      <div className="mb-6 flex w-full max-w-2xl flex-col items-center justify-center gap-3 sm:mb-8">
        <CompanyLogo svgSize={40} color="text-text-default" noText={true} />
        <div className="flex w-fit flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-semibold text-text-default sm:text-3xl">
            Shape Your Unique Space
          </h1>
          <h3 className="text-sm font-normal text-highlighted-text sm:text-base">
            Every detail counts. Craft a community that's as unique as you are
          </h3>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-md flex-col items-center justify-center gap-6 sm:max-w-lg md:max-w-xl lg:max-w-2xl"
      >
        <div className="flex w-full flex-col">
          <Input
            label="Community Title"
            value={communityTitle}
            onChange={handleCommunityTitleChange}
            className={`flex w-full rounded-md border-border bg-background py-6 text-foreground focus-visible:ring-transparent ${
              communityTitle.length > 30 || errors.title
                ? "border-destructive text-destructive"
                : ""
            }`}
            placeholder="Community Name"
          />
          <div className="flex w-full justify-between text-xs sm:text-sm">
            <span
              className={`pl-2 pt-1 sm:pl-4 ${
                communityTitle.length > 30 || errors.title
                  ? "text-destructive"
                  : "text-text-gray"
              }`}
            >
              {errors.title ||
                (communityTitle.length >= 3
                  ? "You can change this later"
                  : "Community name is too short")}
            </span>
            <span
              className={`pr-1 pt-1 ${
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
            className={`flex min-h-10 w-full resize-none overflow-hidden rounded-md border border-border bg-background px-3 py-6 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0 sm:py-5 ${
              communityDescription.length > 500 || errors.description
                ? "border-destructive text-destructive"
                : ""
            }`}
            ref={communityAreaRef}
            rows={1}
            value={communityDescription}
          />
          <div className="flex w-full justify-between text-xs sm:text-sm">
            <span
              className={`pl-2 pt-1 sm:pl-4 ${
                communityDescription.length > 500 || errors.description
                  ? "text-destructive"
                  : "text-text-gray"
              }`}
            >
              {errors.description ||
                (communityDescription.length >= 1
                  ? "You can change this later"
                  : "Community description is required")}
            </span>
            <span
              className={`pr-1 pt-1 ${
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
              communitySlug.length > 30 || errors.slug
                ? "border-destructive text-destructive"
                : ""
            }`}
            placeholder="Community Url"
          />
          <div className="flex w-full justify-between text-xs sm:text-sm">
            <span
              className={`pl-2 pt-1 sm:pl-4 ${
                communitySlug.length > 30 || errors.slug
                  ? "text-destructive"
                  : "text-text-gray"
              }`}
            >
              {errors.slug ||
                (communitySlug.length >= 3
                  ? "You can change your community url later"
                  : "Community url is too short")}
            </span>
            <span
              className={`pr-1 pt-1 ${
                communitySlug.length > 30
                  ? "text-destructive"
                  : "text-text-gray"
              }`}
            >
              {communitySlug.length + " / 30"}
            </span>
          </div>
        </div>

        <Button className="mt-5 w-full bg-button py-4 text-button-text hover:bg-button-hover active:bg-button-active sm:w-[60%] sm:py-6">
          Continue
        </Button>
      </form>
    </div>
  );
}
