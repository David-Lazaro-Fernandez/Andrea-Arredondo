const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const {serialize} = require("next-mdx-remote/serialize");
const root = process.cwd();

console.log(root);
console.log("HELOOO");

const getFiles = () => {
  fs.readdirSync(path.join(process.cwd(), "../content"));
};

const getFileBySlug = async ({ slug }) => {
  const mdxSource = fs.readFileSync(
    path.join(process.cwd(), "../content", `${slug}.mdx`),
    "utf-8"
  );
  const { data, content } = matter(mdxSource);
  const source = await serialize(content, {});

  return {
    source,
    frontMatter: {
      slug,
      ...data,
    },
  };
};

export const getAllFilesMetadata = () => {
  const files = getFiles();
  return files.reduce((allPosts, postSlug) => {
    const mdxSource = fs.readFileSync(
      path.join(process.cwd(), "../content", `${postSlug}.mdx`),
      "utf-8"
    );
    const { data } = matter(mdxSource);
    return [{ ...data, slug: postSlug.replace(".mdx", "") }, ...allPosts];
  },[]);
};
