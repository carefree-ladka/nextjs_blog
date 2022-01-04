import fs from 'fs'
import Head from 'next/head'
import Link from 'next/link'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
  return (

    <>
      <Head>
        <title>{slug}</title>
      </Head>
      <Link href="/Blogs">
        <a className="underline  tracking-widest hover:text-blue-800 absolute left-40 text-lg text-rose-500 ">Posts</a>
      </Link>
      <div className='px-8 py-12 max-w-md mx-auto hero container pb-10 md:max-w-2xl sm:max-w-xl sm:mx-auto sm:pl-10 text-lg'>
        <div className=''>
          <h1 className='text-h2 font-bold' >{title}</h1>
          <div className='pb-3'>Posted on {date}</div>
          <img className="pb-3" src={cover_image} alt='' />
          <div className=''>
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}
