import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post, AndreaPost, allAndreaPosts } from 'contentlayer/generated'
import Highlights from './components/Highlights'
import Extracurricular from './components/Extracurricular'
function PostCard(post: AndreaPost) {
  return (
    <div className="Card">
      
    </div>
  )
}

export default function Home() {
  const posts = allAndreaPosts

  return (
    <div>
      <h1 >Next.js + Contentlayer Example</h1>
      <Highlights />
      <Extracurricular />
    </div>
  )
}