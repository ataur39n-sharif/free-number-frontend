import Link from "next/link"

const Footer = () => {
    return (
        <footer className="text-center bg-dark text-light pt-2 pb-2">
            <span>All copyright reserved. </span>
            <Link href='/privacy'>Privacy & Terms</Link>
        </footer>
    )
}

export default Footer