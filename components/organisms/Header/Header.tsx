"use client"
import { useEffect, useState } from "react"
import styles from './Header.module.scss'
import Button from '../../atoms/Button/Button'
import { Image, HyperLink } from '@/libs/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'




type HeaderProps = {
    links: HyperLink[]
    img : Image
}

export default function Header({links, img} : HeaderProps) {
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()
        
    const handleScroll = () => {
        setScrolled(window.scrollY > 5 ? true : false)
    }
    
    useEffect(() => {
        if (pathname !== "/") {
            setScrolled(true)
            return
        } 
        handleScroll()
        document.addEventListener('scroll', () => handleScroll())
        
        return () => {
            document.removeEventListener('scroll', () => handleScroll())
        }
    }, [pathname]);


    


    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
            <nav>
                <Link href={'/'} className={styles.logo}>
                    <img src={img.src} alt={img.alt} />
                </Link>
                <ul>
                    {(links ?? []).map((link, index) => 
                        <Button href={link.href} key={index} button={false}>
                            {link.children}
                        </Button>
                    )}
                </ul>
                <div className={styles.extraLinks}>
                    <Button href='/contact' button={true}>Contactez-Nous</Button>
                    <Button href='/booking' button={true}>Réserver</Button>
                </div>
            </nav>
        </header>
    )
}
