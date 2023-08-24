import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: "string", required: true },
    subtitle: { type: "string", required: true },
  },
  computedFields: {
  },
}));

export default makeSource({ contentDirPath: "app/content", documentTypes: [Post] });
    