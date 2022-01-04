import Head from 'next/head'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import Social from '../components/Social'
import Link from 'next/link'


export default function Home() {
  return (
    <div className=' min-h-screen'>
      <div className='px-8 py-12 max-w-md mx-auto hero container pb-10 md:max-w-2xl sm:max-w-xl sm:mx-auto sm:pl-10 text-lg'>
        <Head>
          <title>Home | Pawan Blog</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="icon" href="/favicon-96x96.png" type="image/gif" sizes="16x16" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@1,300&display=swap" rel="stylesheet" />
        </Head>
        <div className='p-5'>
          <Hero />
          <Social />
          <Posts />
          <div className='mt-5'>
            <h2 className='mb-3'>Posts:</h2>
            <li> <Link href="/Blogs">
              <a className="underline text-link tracking-widest hover:text-blue-800" >Posts</a>
            </Link></li>
          </div>
        </div>
      </div>
    </div>
  )
}




