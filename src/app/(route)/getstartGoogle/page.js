import MainFeature from '@/components/landing/mainfeature'
import JoinCreator from '@/components/landing/join_creator'
import Hero from '@/components/landing/hero'
import Contact from '@/components/landing/contact'

export default function Home() {
  return (
    <main>
      <section>
        <Hero />
      </section>
      <section>
        <MainFeature />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <JoinCreator />
      </section>
    </main>
  )
}