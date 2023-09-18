import { Image } from "@/libs/types"
import styles from './Hero.module.scss'

type HeroProps = {
    img: Image,
    title: string,
    id: string,
}


export default function Hero({img, title, id} : HeroProps) {
    return (
        <section id={id} className={styles.hero}>
            <img src={img.src} alt={img.alt ?? "test"} />
            <div>
                <h1>{title}</h1>
            </div>
        </section>
    )
}
