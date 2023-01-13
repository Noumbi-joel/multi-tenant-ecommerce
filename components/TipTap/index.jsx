import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";

import Bold from "../../public/bold.svg";
import T from "../../public/t.svg";
import Justify from "../../public/justify.svg";
import Italic from "../../public/italic.svg";
import Hook from "../../public/hook.svg";
import H2 from "../../public/h2.svg";
import H1 from "../../public/h1.svg";
import Right from "../../public/right.svg";
import Center from "../../public/center.svg";
import Left from "../../public/left.svg";
import Colors from "../../public/colors.svg";
import Line from "../../public/line.svg";

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="editor">
      <div className="editor-content">
        <Bold
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active" : ""}
        />
        <Italic
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
        />
        <Line
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is-active" : ""}
        />
        <H1
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 }) ? "is-active" : ""
          }
        />
        <H2
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 }) ? "is-active" : ""
          }
        />
        <Justify
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "is-active" : ""}
        />
        <Hook
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive("codeBlock") ? "is-active" : ""}
        />
      </div>
    </div>
  );
};

export default ({ value, onChange }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent
        value={value}
        onChange={onChange}
        editor={editor}
        className="input-editor"
      />
    </div>
  );
};
