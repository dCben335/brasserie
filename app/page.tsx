import styles from './page.module.scss'
import Hero from '@/components/organisms/Hero/Hero'

export default function Home() {
  const heroImg = {
    src: "images/hero.jpg",
    alt: "image de présentation de la brasserie"
  }

  return (
    <main>
      <Hero 
          title="Bienvenue au bar des Nains"
          img={heroImg} 
          id='accueil'
      />
      <section>
      <h2>test</h2>
      <h2>test</h2>
      <h2>test</h2>
      <h2>test</h2>
      <h2>test</h2>
      <h2>test</h2>
      </section>
    </main>
  )
}
