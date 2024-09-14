"use client";

import AboutCommunityImages from "@/app/components/about-community/images";
import React, { useState } from "react";

import { Star } from "lucide-react";

import { Rating } from "react-simple-star-rating";
import { Button } from "@/components/ui/button";

import { ShieldCheck } from "lucide-react";

export default function AboutCommunityPage(props) {
  const [rating, setRating] = useState(3.5);

  return (
    <>
      <div className="mt-14 flex h-[70vh] w-[90vw] gap-14 rounded-xl border border-border bg-card p-10">
        <div className="flex h-full w-[40%] flex-col items-center gap-8">
          {/* <h2 className="text-2xl font-bold text-text-default">
            Title of the community.
          </h2> */}

          <AboutCommunityImages></AboutCommunityImages>
        </div>

        <div className="flex h-fit w-[37%] flex-col gap-6">
          <div className="flex w-full flex-col gap-2">
            <h2 className="fill-re text-3xl font-bold text-text-default">
              Hamza Academy
            </h2>

            <div className="flex h-fit flex-row items-center gap-2">
              <div className="flex items-center gap-1">
                <Star
                  size={15}
                  fill="#F0b25A"
                  color="#F0b25A"
                  strokeWidth={1.5}
                ></Star>
                <Star
                  size={15}
                  fill="#F0b25A"
                  color="#F0b25A"
                  strokeWidth={1.5}
                ></Star>
                <Star
                  size={15}
                  fill="#F0b25A"
                  color="#F0b25A"
                  strokeWidth={1.5}
                ></Star>
                <Star
                  size={15}
                  fill="#"
                  color="#F0b25A"
                  strokeWidth={1.5}
                ></Star>
                <Star
                  size={15}
                  fill="#"
                  color="#F0b25A"
                  strokeWidth={1.5}
                ></Star>
              </div>

              <span className="text-center text-sm font-light">{rating}</span>

              <span className="text-center text-sm font-light text-highlighted-text underline">{`(6 reviews)`}</span>
            </div>
            {/* <Rating
              initialValue={rating}
              allowFraction={true}
              SVGclassName={`inline-block  `}
              fillColor="#F0B25A"
              onClick={(rate) => setRating(rate)}
              size={17}
              readonly={true}
            /> */}
          </div>

          <div className="text-normal flex h-fit w-full font-light text-text-default/80">
            <span className="">
              Join the #1 Clothing Brand Community in the WORLD. WHATEVER PRICE
              YOU JOIN AT IS WHAT YOU GET FOREVER. Learn Everything I Know as a
              7 Figure Brand Owner at 18 What you will get: ​Elite Network of
              Brand Owners and Online Bread Winners Live Weekly Support Calls​
              Access to Design Coaches Access to Paid Ads Coaches ​Special Guest
              Masterclasses ​Full A-Z Clothing Brand Guide ​Full A-Z Marketing
              Guide ​Full A-Z Social Media Guide ​My Personal Manufactures and
              Designers List ​Credit and Money Management Guide ​Full Resellers
              Guide Ranking/Rewards System ​ 24/7 Support
            </span>
          </div>
        </div>

        <div className="flex h-full w-[20%]">
          <div className="flex h-fit w-full flex-col gap-6 rounded-xl border border-border p-5">
            <h4 className="text-xl">Join now</h4>

            <Button className="w-full bg-button py-6 text-base text-button-text hover:bg-button-hover active:bg-button-active">
              Get Access
            </Button>

            <div className="flex w-full flex-col items-center justify-center text-[0.8rem] font-light text-highlighted-text/80">
              <span>Cancel subscription at any time</span>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-highlighted-text" />
                <span>
                  Secured by <strong className="font-bold">Tribofy</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
