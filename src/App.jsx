import './App.css'
import Nav from './components/Nav'
import { Hero, PopularProducts } from './sections'

function App() {

  return (
    <main className="relative">
      <Nav />
      <Hero />
      <PopularProducts />
      <section className="padding">Super Quality</section>
      <section className="padding">Services App</section>
      <section className="padding">Special Offer</section>
      <section className="padding bg-pale-blue">Customer Reviews</section>
      <section className="padding-x sm:py-32 py-16 w-full">Subscribe</section>
      <section className="padding">Footer</section>
    </main>
  )
}

export default App
