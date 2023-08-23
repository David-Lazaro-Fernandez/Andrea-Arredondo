import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {serialize} from 'next-mdx-remote'


const root = process.cwd();
console.log(path.join(root, "../content"))

// export const getFiles = () => fs.readdirSync(path.join(root, "../content"));

// export const getFileBySlug = async ({ slug }) => {
//   const mdxSource = fs.readFileSync(
//     path.join(process.cwd(), "../content", `${slug}.mdx`),
//     "utf-8"
//   );
//   const { data, content } = matter(mdxSource);
//   const source = await serialize(content, {});

//   return {
//     source,
//     frontMatter: {
//       slug,
//       ...data,
//     },
//   };
// };

// export const getAllFilesMetadata = () => {
//   const files = getFiles();
//   return files.reduce((allPosts, postSlug) => {
//     const mdxSource = fs.readFileSync(
//       path.join(process.cwd(), "../content", `${postSlug}.mdx`),
//       "utf-8"
//     );
//     const { data } = matter(mdxSource);
//     return [{ ...data, slug: postSlug.replace(".mdx", "") }, ...allPosts];
//   }, []);
// };
