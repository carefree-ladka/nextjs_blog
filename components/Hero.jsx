import Image from 'next/image'
export default function Hero() {
    return (
        <>
            <div className='font-mono text-lg '>
                <div className=' pb-3'>
                    <Image src="/pawan.jpg" height={200} width={200} priority alt="pawan" />
                </div>
                <p className='tracking-wide leading-7'>
                    I'm a Software Engineer who enjoys coding and designing responsive web apps. My favorite technologies right now are: <mark>React.js, Next.js, Typescript, GraphQL, Node.js and MongoDB</mark>.
                </p>
               <div className=" tracking-wider  inline-block mt-3">
               <a className='underline text-blue-600 hover:text-blue-800 tracking-widest' href='/Resume.pdf' rel="noopener noreferrer" target="_blank">Download my resume</a>
               </div>
            </div>
        </>
    )
}