"use client"

import { useState, useCallback } from "react"
import { ThemeProvider } from "next-themes"
import Header from "../components/Header"
import Exp from "../components/Exp"
import Footer from "../components/Footer"

export default function Experiences() {
  const [sortOrder, setSortOrder] = useState("New")
  const [searchQuery, setSearchQuery] = useState("")

  const features = [
    { id: 1, name: "TOGGLE DARK/LIGHT MODE", link: "/darkmode" },
    { id: 2, name: "MOVING LOGO", link: "/feature2" },
    { id: 3, name: "TOP/NEW SORTING", link: "/topnewsorting" },
    { id: 4, name: "SEARCH ENGINE", link: "/feature4" },
    { id: 5, name: "???", link: "/feature5" },
    { id: 6, name: "???", link: "/feature6" },
  ]

  const handleSearch = useCallback((query) => {
    setSearchQuery(query)
  }, [])

  const filteredFeatures = features.filter((feature) => feature.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const sortedFeatures =
    sortOrder === "New"
      ? filteredFeatures
      : [...filteredFeatures].sort((a, b) => {
          const newOrder = [1, 3, 0, 2, 5, 4]
          return (
            newOrder.indexOf(features.findIndex((f) => f.id === a.id)) -
            newOrder.indexOf(features.findIndex((f) => f.id === b.id))
          )
        })

  const handleSortChange = (newSortOrder) => {
    setSortOrder(newSortOrder)
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <Exp onSortChange={handleSortChange} onSearch={handleSearch} />
        <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {sortedFeatures.map((feature) => (
            <a
              key={feature.id}
              href={feature.link}
              className="bg-[#D9D9D9] dark:bg-gray-800 border-2 border-black dark:border-white rounded-2xl aspect-[3/4] transform transition-transform hover:scale-105 flex items-center justify-center"
            >
              <span className="text-black dark:text-white font-inter font-semibold">{feature.name}</span>
            </a>
          ))}
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

