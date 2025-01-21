"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import { ThemeProvider, useTheme } from "next-themes"
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
    { id: 5, name: "???", link: null },
    { id: 6, name: "???", link: null },
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
      <div className="min-h-screen bg-white dark:bg-black">
        <Header />
        <Exp onSortChange={handleSortChange} onSearch={handleSearch} />
        <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {sortedFeatures.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

function FeatureCard({ feature }) {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isMovingLogo = feature.name === "MOVING LOGO"
  const isToggleDarkMode = feature.name === "TOGGLE DARK/LIGHT MODE"
  const isTopNewSorting = feature.name === "TOP/NEW SORTING"
  const isSearchEngine = feature.name === "SEARCH ENGINE"
  const isUnknownFeature = feature.name === "???"

  // Use a default theme (e.g., 'light') for the initial server-side render
  const currentTheme = mounted ? theme : "light"

  let bgImage = ""
  if (isMovingLogo) {
    bgImage = currentTheme === "dark" ? "/images/darkmovinglogobg.png" : "/images/movinglogobg.png"
  } else if (isToggleDarkMode) {
    bgImage = currentTheme === "dark" ? "/images/darkdarkmodebg.png" : "/images/darkmodebg.png"
  } else if (isTopNewSorting) {
    bgImage = currentTheme === "dark" ? "/images/darknewtopsortinglogobg.png" : "/images/newtopsortinglogobg.png"
  } else if (isSearchEngine) {
    bgImage = currentTheme === "dark" ? "/images/darksearchenginebg.png" : "/images/searchenginebg.png"
  }

  const cardContent = (
    <div
      className={`relative border-2 border-black dark:border-white rounded-2xl aspect-[3/4] hover:scale-105 flex items-center justify-center overflow-hidden ${
        isMovingLogo || isToggleDarkMode || isTopNewSorting || isSearchEngine
          ? "bg-[#D9D9D9] dark:bg-gray-800"
          : "bg-[#D9D9D9] dark:bg-gray-800"
      }`}
    >
      {(isMovingLogo || isToggleDarkMode || isTopNewSorting || isSearchEngine) && mounted && (
        <Image
          src={bgImage || "/placeholder.svg"}
          alt={`${feature.name} Background`}
          fill
          style={{ objectFit: "cover" }}
          className="z-0"
        />
      )}
      <span className="text-black dark:text-white font-inter font-semibold z-10 relative">{feature.name}</span>
    </div>
  )

  return isUnknownFeature ? (
    cardContent
  ) : (
    <a href={feature.link} className="block">
      {cardContent}
    </a>
  )
}

