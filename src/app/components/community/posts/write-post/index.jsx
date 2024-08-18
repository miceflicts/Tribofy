"use client";

import React, { useState } from "react";
import WritePostDialog from "../write-post-dialog";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";

export default function WritePost() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Dialog>
        <DialogTrigger
          className="flex h-[80px] w-[95%] cursor-pointer items-center justify-start gap-4 rounded-xl border border-border bg-card px-6 hover:bg-card-hover"
          onClick={() => setOpen(!open)}
        >
          <div className="h-[45px] w-[45px] rounded-full bg-accent"></div>
          <h3 className="font-medium text-highlighted-text">
            Write what you are thinking
          </h3>
        </DialogTrigger>

        {/* Dialog Content */}
        <WritePostDialog></WritePostDialog>
      </Dialog>
    </>
  );
}
