"use client"

import { useState } from "react"
import Header from "../components/Header"
import Exp from "../components/Exp"
import Footer from "../components/Footer"

export default function Experiences() {
  const [sortOrder, setSortOrder] = useState("New")

  const features = [
    { id: 1, name: "TOGGLE DARK/LIGHT MODE", link: "/darkmode" },
    { id: 2, name: "MOVING LOGO", link: "/feature2" },
    { id: 3, name: "TOP/NEW SORTING", link: "/topnewsorting" },
    { id: 4, name: "SEARCH ENGINE", link: "/feature4" },
    { id: 5, name: "???", link: "/feature5" },
    { id: 6, name: "???", link: "/feature6" },
  ]

  const sortedFeatures =
    sortOrder === "New" ? features : [features[1], features[3], features[0], features[2], features[5], features[4]]

  const handleSortChange = (newSortOrder) => {
    setSortOrder(newSortOrder)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header/>
      <Exp onSortChange={handleSortChange} />
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {sortedFeatures.map((feature) => (
          <a
            key={feature.id}
            href={feature.link}
            className="bg-[#D9D9D9] border-2 border-black rounded-2xl aspect-[3/4] transform transition-transform hover:scale-105 flex items-center justify-center"
          >
            <span className="text-black font-inter font-semibold">{feature.name}</span>
          </a>
        ))}
      </div>
      <Footer/>
    </div>
  )
}

