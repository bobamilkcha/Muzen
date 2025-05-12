import Hero from '../components/Hero'
import FeaturedEvents from '../components/FeaturedEvents'
import Features from '../components/Features'
import SearchFilter from '../components/SearchFilter';
import ContactUs from '../components/ContactUs';
import AboutUs from '../components/AboutUs';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedEvents />
      <SearchFilter />
      <AboutUs />
      <Features />
      <ContactUs />
    </main>
  )
}
