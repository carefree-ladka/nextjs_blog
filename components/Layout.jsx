import Link from "next/link"
export default function Layout({ children }) {
    return (
        <div className=" relative">
            <Link href="/">
                <a className="underline  tracking-widest hover:text-blue-800 absolute right-40 text-lg text-rose-500 ">Blog Doses</a>
            </Link>
            {children}
        </div>
    )
}