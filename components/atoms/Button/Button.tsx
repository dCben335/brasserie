import Link from "next/link"
import styles from './Button.module.scss'
import { HyperLink } from "@/libs/types"

type ButtonProps = HyperLink & {
    button: boolean
    type? : "submit" | "button"
}

export default function Button({href, children, button, type} : ButtonProps) {
    return (
        <>
            {href && !type ?
                <Link href={href} className={`${button ? styles.button : styles.link}`}>
                    {children}
                </Link>
                : 
                <button className={`${button ? styles.button : styles.link}`} type={type}>
                    {children}
                </button>
            }
        </>
    )
}
