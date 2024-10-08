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

import { postService } from "@/app/services/api";

import "./index.css";

export default function WritePostDialog(props) {
  const [title, setTitle] = useState("");
  const [editorContent, setEditorContent] = useState("");
  const [isPublishing, setIsPublishing] = useState(false);
  const [activeStyles, setActiveStyles] = useState({
    bold: false,
    italic: false,
    underline: false,
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

  const handlePostPublish = useCallback(async () => {
    const trimmedText = editor
      ?.getHTML()
      .replace(/<[^>]+>/g, "")
      .trim();

    if (!title || trimmedText === "") {
      alert("Please enter a title and write a post.");
      return;
    }

    if (title.length < 3 || title.length > 200) {
      alert("The title must be between 3 and 200 characters.");
      return;
    }

    setIsPublishing(true);
    try {
      const postData = {
        title,
        content: editor.getHTML(),
        author: "66be890f0e5c076022ebad05",
        community: "66bfd4e3fae5eb91e7833c62",
        category: "66bfdef9baede5830f08e74d",
      };
      await postService.createPost(postData);
      alert("Post published successfully!");
      setTitle("");
      editor.commands.setContent("");
    } catch (error) {
      alert("An error occurred while publishing the post. Please try again.");
      console.error(error);
    } finally {
      setIsPublishing(false);
    }
  }, [title, editor]);

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
            className="border-none bg-transparent p-1 text-2xl font-bold shadow-none ring-offset-0 ring-offset-transparent placeholder:text-highlighted-text focus-visible:ring-transparent dark:border-none dark:bg-transparent dark:shadow-none dark:ring-offset-0 dark:focus-visible:ring-transparent"
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
            <Button className="flex gap-3 bg-button hover:bg-button-hover active:bg-button-active">
              <SendHorizonal size={20} className="text-button-text" />
            </Button>

            <Button
              className="flex gap-3 bg-button hover:bg-button-hover active:bg-button-active"
              onClick={handlePostPublish}
              disabled={isPublishing}
            >
              <span>{isPublishing ? "Publicando..." : "Publicar"}</span>
              <SendHorizonal size={20} className="text-button-text" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </>
  );
}
