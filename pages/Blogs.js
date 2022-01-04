import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../components/Post'
import { sortByDate } from '../utils'






export default function Blogs({ posts }) {
    return (
        <>
        <Head>
            <title>Blogs</title>
        </Head>
        <div className='px-8 py-12 max-w-md mx-auto hero container pb-10 md:max-w-2xl sm:max-w-xl sm:mx-auto sm:pl-10 text-lg'>
            <h2 className='mt-5'>Posts:</h2>
            <div className='posts'>
                {posts.map((post, index) => (
                    <Post key={index} post={post} />
                ))}
            </div>
        </div>
        </>
    )
}



export async function getStaticProps() {
    // Get files from the posts dir
    const files = fs.readdirSync(path.join('posts'))

    // Get slug and frontmatter from posts
    const posts = files.map((filename) => {
        // Create slug
        const slug = filename.replace('.md', '')

        // Get frontmatter
        const markdownWithMeta = fs.readFileSync(
            path.join('posts', filename),
            'utf-8'
        )

        const { data: frontmatter } = matter(markdownWithMeta)

        return {
            slug,
            frontmatter,
        }
    })

    return {
        props: {
            posts: posts.sort(sortByDate),
        },
    }
}
