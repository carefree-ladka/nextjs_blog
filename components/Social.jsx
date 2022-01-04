import Link from "next/link"
export default function Social() {
    return (
        <div className="mt-5">
            <h2 className="pb-5">Follow Me Online Here:</h2>
            <li className="pb-3">
                <Link href="https://twitter.com/KPawanFD" >
                    <a className="underline text-link tracking-widest hover:text-blue-800 " >Twitter</a>
                </Link>
            </li>
            <li className="pb-3">
                <Link href="https://github.com/carefree-ladka">
                    <a className="underline text-link tracking-widest hover:text-blue-800">Github</a>
                </Link>
            </li>
            <li>
                <Link href="https://www.linkedin.com/in/kumpawan/">
                    <a className="underline text-link tracking-widest hover:text-blue-800">Linkedin</a>
                </Link>
            </li>

        </div>
    )
}