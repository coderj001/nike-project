import './App.css'
import Nav from './components/Nav'
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  ServiceApp,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from './sections'

function App() {

  return (
    <main className="relative">
      <Nav />
      <Hero />
      <PopularProducts />
      <SuperQuality />
      <ServiceApp />
      <SpecialOffer />
      <CustomerReviews />
      <Subscribe />
      <Footer />
    </main>
  )
}

export default App
