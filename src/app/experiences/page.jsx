"use client"

import { useState } from "react"
import Header from "../components/Header"
import Exp from "../components/Exp"
import Footer from "../components/Footer"

export default function Experiences() {
  const [sortOrder, setSortOrder] = useState("New")

  const features = [
    { id: 1, name: "TOGGLE DARK/LIGHT MODE", link: "/darkmode" },
    { id: 2, name: "FEATURE 2", link: "/feature1" },
    { id: 3, name: "FEATURE 3", link: "/feature2" },
    { id: 4, name: "FEATURE 4", link: "/feature3" },
    { id: 5, name: "FEATURE 5", link: "/feature4" },
    { id: 6, name: "FEATURE 6", link: "/feature5" },
  ]

  const sortedFeatures =
    sortOrder === "New" ? features : [features[3], features[1], features[0], features[2], features[5], features[4]]

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

