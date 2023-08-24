import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'


const root = process.cwd();

export const getFiles = () => fs.readdirSync(path.join(root, "/app/content"));

export const getFileBySlug = async ({ slug }) => {
  const mdxSource = fs.readFileSync(
    path.join(process.cwd(), "/app/content", `${slug}.mdx`),
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
      path.join(process.cwd(), "/app/content", `${postSlug}`),
      "utf-8"
    );
    const { data } = matter(mdxSource);
    return [{ ...data, slug: postSlug.replace(".mdx", "") }, ...allPosts];
  }, []);
};
