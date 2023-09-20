import styles from './page.module.scss'
import Hero from '@/components/organisms/Hero/Hero'
import Video from '@/components/atoms/Video/Video'
import Container from '@/components/organisms/Container/Container'
import ProductCard from '@/components/molecules/ProductCard/ProductCard'
import Map from '@/components/molecules/Map/Map'
import { useMemo } from 'react'
import dynamic from 'next/dynamic'


export default function Home() {
  const heroImg = {
    src: "images/hero.jpg",
    alt: "image de présentation de la brasserie"
  }

  return (
    <main className={styles.main}>
      <Hero 
          title="Bienvenue à la table des Nains"
          img={heroImg} 
          id='accueil'
      />
      <section id='presentation' className={styles.section}>
        <Container>
          <div className={styles.presentation}>
            <h2>Présentation</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus incidunt rerum error delectus itaque rem numquam assumenda similique earum quae architecto quidem ut dolores laboriosam, dolore repellendus consequatur autem neque!</p>  
          </div>
          <div>
            <Video src={"/videos/nain.mp4"} controls={true} autoPlay={false} muted={false}/>
          </div>
        </Container>
      </section> 

      <section id='specialties' className={`${styles.section} ${styles.specialties}`}>
        <h2>Nos spécialitées</h2>
        <Container>
          <ProductCard 
            link=""
            title='Burger Max'
            img={{ 
              src: "/images/burger.png",
              alt: "burger"
            }}
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis cumque consectetur consequuntur odio similique labore quo aspernatur itaque, nesciunt eveniet ex nostrum doloremque culpa saepe blanditiis ea ad vero. Sunt est voluptatem quaerat laborum suscipit.'
          />
          <ProductCard 
            link=""
            title='Bière Werit'
            img={{  
              src: "/images/beer.png",
              alt: "Werit"
            }}
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis cumque consectetur consequuntur odio similique labore quo aspernatur itaque, nesciunt eveniet ex nostrum doloremque culpa saepe blanditiis ea ad vero. Sunt est voluptatem quaerat laborum suscipit.'
          />
        </Container>
      </section>
      <section className={`${styles.section} ${styles.infos} `}>
        <Container>
          <div>
            <h2>Retrouvez nous</h2>
            <div>
              <p>Ouvert du <strong>lundi</strong> au <strong>dimanche</strong></p>
              <p>de <strong>18h</strong> à <strong>2H</strong></p>
              <strong></strong>
            </div>
          </div>
          <Map />
        </Container>
      </section>

    </main>
  )
}
