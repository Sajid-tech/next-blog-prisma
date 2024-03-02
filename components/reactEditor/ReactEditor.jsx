import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const ReactEditor = ({ value, setValue }) => {
  return (
    <div>
      <ReactQuill
        theme="bubble"
        value={value}
        onChange={setValue}
        placeholder="Tell your story..."
      />
    </div>
  );
};

export default ReactEditor;
