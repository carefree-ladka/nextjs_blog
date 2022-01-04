import Head from 'next/head'
import Link from 'next/link'

export default function Post({ post }) {
  return (
    <>
     
     
      <div className='mt-5'>
        {/* <img src={post.frontmatter.cover_image} alt='' /> */}
        <Link href={`/blog/${post.slug}`}>
          <a className='font-bold underline className="underline text-link tracking-wider hover:text-blue-800 '>{post.frontmatter.title}</a>
        </Link>
        <p className='text-gray-500'>{post.frontmatter.excerpt}</p>
        <div className='text-sm'>Posted on {post.frontmatter.date}</div>

      </div>
    </>
  )
}
