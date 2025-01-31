import Contact from '@/components/landing/contact'
import Hero from '@/components/landing/hero'
import MainFeature from '@/components/landing/mainfeature'
import JoinCreator from '@/components/landing/join_creator'
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