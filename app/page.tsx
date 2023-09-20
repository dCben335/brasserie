import styles from './page.module.scss'
import Hero from '@/components/organisms/Hero/Hero'
import Video from '@/components/atoms/Video/Video'
import Container from '@/components/organisms/Container/Container'
import ProductCard from '@/components/molecules/ProductCard/ProductCard'
import dynamic from 'next/dynamic'

export default function Home() {
  const Map = dynamic(() => import("@/components/molecules/Map/Map"), {
    ssr: false
  });

  const heroImg = {
    src: "images/hero.jpeg",
    alt: "présentation de la brasserie"
  }

  const specialtiesProducts = [
    {
      link:"",
      title:'Bière Werit',
      img:{  
        src: "/images/beer.png",
        alt: "Werit burger"
      },
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis cumque consectetur consequuntur odio similique labore quo aspernatur itaque, nesciunt eveniet ex nostrum doloremque culpa saepe blanditiis ea ad vero. Sunt est voluptatem quaerat laborum suscipit.',
    },
    {
      link:"",
      title:'Burger Werit',
      img:{  
        src: "/images/burger.png",
        alt: "Werit beer"
      },
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis cumque consectetur consequuntur odio similique labore quo aspernatur itaque, nesciunt eveniet ex nostrum doloremque culpa saepe blanditiis ea ad vero. Sunt est voluptatem quaerat laborum suscipit.',
    },
    {
      link:"",
      title:'Chimay Blue',
      img:{  
        src: "/images/chimay.png",
        alt: "chimay blue"
      },
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis cumque consectetur consequuntur odio similique labore quo aspernatur itaque, nesciunt eveniet ex nostrum doloremque culpa saepe blanditiis ea ad vero. Sunt est voluptatem quaerat laborum suscipit.',
    },
  ];

  return (
    <main className={styles.main}>
      <Hero 
          title="Bienvenue À La Table des Nains"
          img={heroImg} 
          id='accueil'
      />
      <section id='presentation' className={`${styles.section}`}>
        <Container>
          <div className={styles.presentation}>
            <h2>Présentation</h2>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus incidunt rerum error delectus itaque rem numquam assumenda similique earum quae architecto quidem ut dolores laboriosam, dolore repellendus consequatur autem neque! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quasi quia earum eos nulla reprehenderit eum asperiores repellendus laborum quos cum, pariatur beatae ad commodi suscipit officiis, nobis inventore error.</p>  
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus incidunt rerum error delectus itaque rem numquam assumenda similique earum quae architecto quidem ut dolores laboriosam, dolore repellendus consequatur autem neque! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quasi quia earum eos nulla reprehenderit eum asperiores repellendus laborum quos cum, pariatur beatae ad commodi suscipit officiis, nobis inventore error.</p>  
            </div>
          </div>
          <div>
            <Video src={"/videos/lorem.mp4"} controls={true} autoPlay={false} muted={false}/>
          </div>
        </Container>
      </section> 

      <section id='specialties' className={`${styles.section} ${styles.specialties}`}>
        <h2>Nos spécialités</h2>
        <Container threeCol={true}>
          {specialtiesProducts.map((specialtiesProduct) => 
            <ProductCard 
              link={specialtiesProduct.link}
              title={specialtiesProduct.title}
              img={specialtiesProduct.img}
              description={specialtiesProduct.description}
            />
          )}
        </Container>
      </section>
      <section id='retrouvez-nous' className={`${styles.section} ${styles.infos}`}>
        <Container largerRight={true}>
          <div className={styles.findus}>
            <h2>Retrouvez nous</h2>
            <div>
              <p>Ouvert du <strong>lundi</strong> au <strong>jeudi</strong> de <strong>18h00</strong> à <strong>0h00</strong></p>
              <p>et du <strong>vendredi</strong> au <strong>dimanche</strong> de <strong>19h00</strong> à <strong>1h00</strong></p>
            </div>
            <span>12 Rue Quentin, 21000 Dijon</span>
          </div>
          <Map />
        </Container>
      </section>
    </main>
  )
}
