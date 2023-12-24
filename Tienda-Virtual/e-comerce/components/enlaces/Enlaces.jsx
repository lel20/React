import Link from "next/link";

export default function Enlaces({ texto, link }) {
    return (
        <Link
            className=' rounded-md w-24 h-8 hover:text-fuchsia-600 ms-4 cursor-pointer'
            href={link}>
            {texto}
        </Link>
    );
}