import { Image } from "@/libs/types"
import styles from './ProductCard.module.scss'
import Link from "next/link"
import Button from "@/components/atoms/Button/Button"

type ProductCardProps = {
    link: string
    title: string,
    img : Image,
    description: string,
}

export default function ProductCard({title, img, description, link} : ProductCardProps) {
    return (
        <article >
            <Link href={link} className={styles.card}>
                <h3>{title}</h3>
                <img src={img.src} alt={img.alt} />
                <p>{description}</p>

                <Button button={true}>En savoir plus</Button>
            </Link>
        </article>
    )
}