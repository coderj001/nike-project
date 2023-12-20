import './App.css'
import Nav from './components/Nav'

function App() {

  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-1 wide:padding-r padding-b">Hero</section>
      <section className="padding">Popular Products</section>
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
