import React, { Component } from "react"
import Navbar from "./component/Navbar"
import Hero from "./component/Hero"
import Card from "./component/Card"
import data from "./data"
import Footer from "./component/Footer"


export default function App() {

  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
      <Footer />
    </div>
  )
}
