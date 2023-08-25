// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypePrettyCode from 'rehype-pretty-code'
import { rehypePrettyCodeOptions } from "./lib/rehypePrettyCode"

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/*.md`,
    fields: {
        title: { type: 'string', required: true },
        subtitle: { type: 'string', required: true },
    },
    computedFields: {
    },
}))

export const AndreaPost = defineDocumentType(() => ({
    name: 'AndreaPost',
    contentType: "mdx",
    filePathPattern: `**/*.mdx`,
    fields: {
        postType: { type: 'string', required: true },
        title: { type: 'string', required: true },
        date: { type: 'string', required: false },
        subtitle: { type: 'string', required: true },
        org: { type: 'string', required: true },
        category: { type: 'string', required: true },
        title_image: { type: 'string', required: true },
        images: { type: 'list', of: { type: 'string' }, required: true },
    },
    computedFields: {
    },
}))

export default makeSource({
    contentDirPath: '.',
    contentDirInclude: ['posts', 'extracurricular_posts'],
    documentTypes: [Post, AndreaPost],
    mdx: {
        rehypePlugins: [
            [rehypePrettyCode, rehypePrettyCodeOptions]
        ],
    }
})