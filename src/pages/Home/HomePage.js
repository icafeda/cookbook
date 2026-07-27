import Hero from "./components/Hero"
import FeaturedProducts from "./components/FeaturedProduct"
import Testimonials from "./components/Testimonials"
import Faq from "./components/Faq"
import useTitle from "../../hook/useTitle"
  





import React from 'react'


const HomePage = () => {
  useTitle("Home");
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <Faq />
    </main>
  )
}

export default HomePage


