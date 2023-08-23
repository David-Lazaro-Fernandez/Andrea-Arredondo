// components/MarkdownReader.js
import { useEffect, useState } from "react";
import matter from "gray-matter";
import remark from "remark";
import remarkReact from "remark-react";

import {
  getMarkdownFiles,
  getMarkdownFileContent,
} from "../services/getMarkdown";

const MarkdownReader = ({ filename }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    if (filename) {
      const rawContent = getMarkdownFileContent(filename);
      const { content: markdownContent } = matter(rawContent);

      remark()
        .use(remarkReact)
        .process(markdownContent, (err, result) => {
          if (err) throw err;
          setContent(result.contents);
        });
    }
  }, [filename]);

  return <div>{content}</div>;
};

export default MarkdownReader;
