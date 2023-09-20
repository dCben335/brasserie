"use client"
import { useEffect, useState } from "react"
import styles from './Header.module.scss'
import Button from '../../atoms/Button/Button'
import { Image, HyperLink } from '@/libs/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'




type HeaderProps = {
    links: HyperLink[]
    logo : Image
}

export default function Header({links, logo} : HeaderProps) {
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()
        
    const handleScroll = (path : string) => {
        setScrolled(() => {
            if (path !== "/") return true
            return window.scrollY > 5 ? true : false
        })
    }
    
    
    useEffect(() => {
        if (pathname !== "/") {
            setScrolled(true)

            return () => {
                document.removeEventListener('scroll', () => handleScroll(pathname))
            }
        } 
        handleScroll(pathname)
        document.addEventListener('scroll', () => handleScroll(pathname))
        
        return () => {
            document.removeEventListener('scroll', () => handleScroll(pathname))
        }
    }, [pathname]);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
            <nav>
                <div className={styles.logo}>
                    <Link href={'/'} >
                        <img src={logo.src} alt={logo.alt} />
                    </Link>
                </div>
                <ul>
                    {(links ?? []).map((link, index) => 
                        <Button href={link.href} key={index} button={false}>
                            {link.children}
                        </Button>
                    )}
                </ul>
                <div className={styles.extraLinks}>
                    <Button href='/contact' button={true}>Contactez-nous</Button>
                    <Button href='/booking' button={true}>Réserver</Button>
                </div>
            </nav>
        </header>
    )
}
