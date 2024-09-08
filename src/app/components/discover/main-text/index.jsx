import React from "react";

export default function DiscoverMainText() {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center text-5xl max-[330px]:text-4xl md:text-6xl lg:text-6xl">
        <h1 className="h-fit bg-gradient-to-br from-[#777777] to-[#4e4e4e] bg-clip-text font-bold text-transparent dark:from-foreground dark:to-foreground/70">
          Find your
        </h1>
        <h1 className="relative h-fit bg-gradient-to-r from-blue-600 to-primary/100 bg-clip-text font-extrabold text-transparent dark:from-blue-300 dark:to-primary/80">
          Digital Tribe
        </h1>
      </div>
    </>
  );
}
