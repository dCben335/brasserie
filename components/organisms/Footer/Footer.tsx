import { Image } from "@/libs/types"
import styles from './Footer.module.scss'
import Link from "next/link"


type FooterProps = {
    logo: Image
}


export default function Footer({logo} : FooterProps) {
    return (
        <footer className={styles.footer}>
            <div className={styles.main}>
                <div className={styles.show}>
                    <Link href={'/'} className={styles.logo}>
                        <img src={logo.src} alt={logo.alt} />
                    </Link>
                    <span>5 Rue du Château, 21000 Dijon</span>
                </div>
                <div className={styles.hourly}>
                    <strong>Horaires d’ouverture :</strong>
                    <ul>
                        <li>Du lundi au jeudi de 8h à 0h00</li>
                        <li>Du vendredi au samedi de 8h à 2h00</li>
                    </ul>
                </div>
                <div className={styles.contact}>
                    <div>
                        <p><strong>Email : </strong><Link href={"mailto:table.nain@contact.fr"}>table.nain@contact.fr</Link></p>
                        <p><strong>Tel : </strong><Link href={""}>06 03 03 04 03</Link></p>
                    </div>
                    <ul className={styles.socials}>
                        <li>
                            <Link href={""}></Link>
                        </li>
                        <li>
                            <Link href={""}></Link>
                        </li>
                    </ul>
                </div>

            </div>
            <aside>
                <span>Copyright © 2023 à La Table des Nains</span>
            </aside>
        </footer>
    )
}