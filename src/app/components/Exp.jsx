"use client"

import { useState, useCallback } from "react"

export default function Exp({ onSortChange, onSearch }) {
  const [activeButton, setActiveButton] = useState("New")
  const [searchQuery, setSearchQuery] = useState("")

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType)
    onSortChange(buttonType)
  }

  const handleSearch = useCallback(
    (e) => {
      const query = e.target.value
      setSearchQuery(query)
      onSearch(query)
    },
    [onSearch],
  )

  const handleKeyPress = useCallback(
    (e) => {
      if (e.key === "Enter") {
        onSearch(searchQuery)
      }
    },
    [searchQuery, onSearch],
  )

  return (
    <header className="w-full border-b-2 border-black">
      <div className="container mx-auto -px-[2rem] py-8">
        <div className="flex items-center justify-between">
          <div className="w-1/3">
            <div className="flex gap-4 justify-center">
              <button
                className={`px-6 py-2 rounded-full ${
                  activeButton === "New" ? "bg-[#FFC939] text-black" : "bg-white text-black border-2 border-[#FFC939]"
                } font-medium`}
                onClick={() => handleButtonClick("New")}
              >
                New
              </button>
              <button
                className={`px-6 py-2 rounded-full ${
                  activeButton === "Top" ? "bg-[#FFC939] text-black" : "bg-white text-black border-2 border-[#FFC939]"
                } font-medium`}
                onClick={() => handleButtonClick("Top")}
              >
                Top
              </button>
            </div>
          </div>

          <h1 className="w-1/3 text-4xl text-black font-bold text-center">EXPERIENCES</h1>

          <div className="w-1/3">
            <div className="flex justify-center">
              <div className="relative w-full max-w-[200px]">
                <input
                  type="text"
                  placeholder="Search for..."
                  value={searchQuery}
                  onChange={handleSearch}
                  onKeyPress={handleKeyPress}
                  className="w-full pl-4 pr-10 py-2 rounded-full bg-[#FFC939] text-black placeholder-black/70 focus:outline-none"
                  aria-label="Search experiences"
                />
                <svg
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

