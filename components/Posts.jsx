import Link from 'next/link'
export default function Posts() {
    return (
        <div>
            <li className="pt-3 ">
                <Link href="/about">
                    <a className="underline text-link tracking-widest hover:text-blue-800 ">About</a>
                </Link>
            </li>

        </div>
    )
}