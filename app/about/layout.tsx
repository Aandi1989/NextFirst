import Link from "next/link";
import styles from './page.module.scss'
import '../styles/globals.scss'

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div>
        <h1>About us</h1>
        <ul className="aboutWrapper">
            <li>
                <Link href="/about/contacts">Contacts</Link>
            </li>
            <li>
                <Link href="/about/team">Team</Link>
            </li>
        </ul>
        {children}
    </div>
}