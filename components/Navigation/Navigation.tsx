'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './navigation.module.scss'

type NavLink = {
    label: string;
    href: string;
};
type Props = {
    navLinks: NavLink[];
};

const Navigation = ({ navLinks }: Props) => {
    const pathname = usePathname();
    console.log("🚀 ~ file: Navigation.tsx:16 ~ Navigation ~ pathname:", pathname)
    
    return (
        <>{
            navLinks.map(link => {
                const isActive = pathname === link.href;
                return(
                    <Link key={link.label} href={link.href} className={isActive ? styles.active : ""}>{link.label}</Link>
                )
            })
        }</>
    );
};

export { Navigation };