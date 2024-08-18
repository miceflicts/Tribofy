"use client";
import React, { useState, useEffect, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { SendHorizonal } from "lucide-react";
import WritePostTools from "../write-post-tools";

import { useEditor, EditorContent } from "@tiptap/react";
import Underline from "@tiptap/extension-underline";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

import "./index.css";

export default function WritePostDialog(props) {
  const [title, setTitle] = useState("");
  const [editorContent, setEditorContent] = useState("");
  const [activeStyles, setActiveStyles] = useState({
    bold: false,
    italic: false,
    underline: false,
  });

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Placeholder.configure({
        placeholder: "Write a post...",
      }),
    ],
    content: "",
    onUpdate({ editor }) {
      setEditorContent(editor.getHTML());
      updateActiveStyles(editor);
    },
    editorProps: {
      attributes: {
        class:
          "prose max-w-full bg-transparent text-[0.9rem] font-normal outline-none placeholder:text-highlighted-text focus:outline-none",
      },
    },
  });

  const updateActiveStyles = useCallback((editor) => {
    if (editor) {
      setActiveStyles({
        bold: editor.isActive("bold"),
        italic: editor.isActive("italic"),
        underline: editor.isActive("underline"),
      });
    }
  }, []);

  useEffect(() => {
    if (editor) {
      editor.on("selectionUpdate", () => updateActiveStyles(editor));
      editor.on("focus", () => updateActiveStyles(editor));
    }
  }, [editor, updateActiveStyles]);

  const handleApplyFormatting = (type) => {
    if (!editor) return;

    try {
      switch (type) {
        case "bold":
          editor.chain().focus().toggleBold().run();
          break;
        case "italic":
          editor.chain().focus().toggleItalic().run();
          break;
        case "underline":
          editor.chain().focus().toggleUnderline().run();
          break;
      }
      updateActiveStyles(editor);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <DialogContent className="flex flex-col">
        <DialogHeader>
          <DialogTitle className="hidden"></DialogTitle>
          <DialogDescription className="hidden"></DialogDescription>

          <div className="flex h-fit w-full gap-3">
            <div className="h-[60px] w-[60px] rounded-full bg-accent"></div>

            <div className="flex h-full flex-col justify-center text-start">
              <h4 className="text-[0.9rem] font-semibold text-text-default">
                Nicolas
              </h4>
              <span className="text-sm text-highlighted-text">
                posting in <strong>Hamza academy</strong>
              </span>
            </div>
          </div>
        </DialogHeader>
        <div className="flex h-fit w-full flex-col gap-2">
          <Input
            type="text"
            placeholder="Title"
            className="border-none p-1 text-2xl font-bold placeholder:text-highlighted-text focus-visible:ring-transparent"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <div className="flex-grow overflow-y-auto">
            <EditorContent editor={editor} />
          </div>
        </div>

        <div className="mt-5 flex h-fit w-full flex-col justify-between gap-2">
          <WritePostTools
            applyFormatting={handleApplyFormatting}
            activeStyles={activeStyles}
          />

          <div className="max-h-[1px] min-h-[1px] min-w-full rounded-lg bg-border"></div>

          <div className="mt-4 flex h-fit w-full justify-between">
            <div>
              <Button></Button>
            </div>

            <div className="flex gap-3">
              <Button className="flex gap-3 bg-button hover:bg-button-hover active:bg-button-active">
                <span>Publish</span>
                <SendHorizonal size={20} className="text-button-text" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </>
  );
}
