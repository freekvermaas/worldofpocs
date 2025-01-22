"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import Image from "next/image"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Link from "next/link"

export default function SearchEngine() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const otherFeatures = [
    { id: 3, name: "NEW/TOP SORTING", link: "/topnewsorting" },
    { id: 2, name: "MOVING LOGO", link: "/movinglogo" },
    { id: 4, name: "TOGGLE DARK/LIGHT MODE", link: "/darkmode" },
  ]

  return (
    <div className={`min-h-screen flex flex-col ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-5xl">
        <div className="space-y-8">
          <div
            className={`border-2 rounded-lg overflow-hidden ${
              theme === "dark" ? "bg-gray-800 border-white" : "bg-gray-200 border-black"
            }`}
          >
            <video className="w-full h-full object-cover" controls playsInline>
              <source src="/videos/searchenginevideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="space-y-6">
            <h1 className="text-3xl font-inter font-semibold">SEARCH ENGINE</h1>
            <div className="flex space-x-10">
              <div>
                <h2 className="text-lg font-inter mb-2">
                  <span className={theme === "dark" ? "text-[#A0A0A0]" : "text-[#696969]"}>Located on: </span>
                  <Link href="/experiences" className="font-semibold hover:underline">
                    Experiences Page
                  </Link>
                </h2>
              </div>
              <div>
                <h2 className="text-lg font-inter mb-2">
                  <span className={theme === "dark" ? "text-[#A0A0A0]" : "text-[#696969]"}>Steps: </span>
                  <span className="font-semibold">3</span>
                </h2>
              </div>
              <div>
                <h2 className="text-lg font-inter mb-2">
                  <span className={theme === "dark" ? "text-[#A0A0A0]" : "text-[#696969]"}>Difficulty: </span>
                  <span className="font-semibold">Medium</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className={`w-full h-0.5 mt-8 ${theme === "dark" ? "bg-white" : "bg-black"}`}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-5xl">
                    <div className="space-y-12">
                      <p className="text-center max-w-3xl mx-auto">
                        The search engine exists to make it easier to find certain items on your website. It's very useful for when you have a large amount to choose from.
                      </p>
            
                      <div className="space-y-6">
                        <h2 className="text-2xl font-inter font-semibold text-center">STEP 1</h2>
                        <div
                        className={`border-2 rounded-2xl max-w-3xl mx-auto overflow-hidden flex items-center justify-center ${
                            theme === "dark" ? "border-white" : "border-black"
                        }`}
                        style={{ width: "200px", height: "75px" }}
                        >
                          <Image
                            src="/images/searchforbutton.png"
                            alt="Step 1 Example Search"
                            width={200}
                            height={200}
                            className="rounded-2xl"
                          />
                        </div>
                        <p className="text-center max-w-3xl mx-auto">
                        The first step is to create the appearance of the search bar. It will have a text input where users can type. We also want to add a search icon to make it look visually appealing.
                        </p>
                      </div>
            
                      <div className="space-y-6">
                        <h2 className="text-2xl font-inter font-semibold text-center">STEP 2</h2>
                        <div
                        className={`border-2 rounded-2xl max-w-3xl mx-auto overflow-hidden flex items-center justify-center ${
                            theme === "dark" ? "border-white" : "border-black"
                        }`}
                        style={{ width: "400px", height: "75px" }}
                        >
                          <Image
                            src="/images/search2code.png"
                            alt="Step 2 Example Search"
                            width={400}
                            height={150}
                            className="rounded-2xl"
                          />
                        </div>
                        <p className="text-center max-w-3xl mx-auto">
                        Now that the search bar looks good, we need to implement the functionality to actually search. We'll track the user’s input and filter the results based on the query.
                        </p>
                      </div>
            
                      <div className="space-y-6">
                        <h2 className="text-2xl font-inter font-semibold text-center">STEP 3</h2>
                        <div
                        className={`border-2 rounded-2xl max-w-3xl mx-auto overflow-hidden flex items-center justify-center ${
                            theme === "dark" ? "border-white" : "border-black"
                        }`}
                        style={{ width: "700px", height: "95px" }}
                        >
                          <Image
                            src="/images/search3code.png"
                            alt="Step 3 Example Search"
                            width={700}
                            height={700}
                            className="rounded-2xl"
                          />
                        </div>
                        <p className="text-center max-w-3xl mx-auto">
                        We now want the search functionality to filter the items displayed on the page (the big buttons) and show only those whose names match the search query. We’ll also handle edge cases like empty searches<br></br>(which will display all) and invalid searches (which will show no results).
                        </p>
                      </div>
            
                      <div className="space-y-6">
                        <h2 className="text-2xl font-inter font-semibold text-center">FINAL RESULT</h2>
                        <div
                            className={`border-2 rounded-2xl max-w-3xl mx-auto overflow-hidden flex items-center justify-center ${
                            theme === "dark" ? "bg-gray-800 border-white" : "bg-gray-200 border-black"
                            }`}
                            style={{ aspectRatio: "16/9" }} // Ensures video maintains the rectangle aspect ratio
                        >
                            <video
                            className="w-full h-full object-cover rounded-2xl"
                            controls
                            playsInline
                            >
                            <source src="/videos/searchenginevideo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                            </video>
                        </div>
                       </div>
            
                    </div>
                    </div>
      
                    <div className={`w-full h-0.5 mt-8 ${theme === "dark" ? "bg-white" : "bg-black"}`}></div>
      

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-5xl">
        <h2 className="text-3xl font-inter font-semibold text-center mb-8">OTHER POC's</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {otherFeatures.map((feature) => (
            <Link
              key={feature.id}
              href={feature.link}
              className="block relative border-2 rounded-2xl aspect-[3/4] hover:scale-105 transition-transform duration-200 overflow-hidden"
            >
              <Image
                src={
                  feature.name === "NEW/TOP SORTING"
                    ? theme === "dark"
                      ? "/images/darknewtopsortinglogobg.png"
                      : "/images/newtopsortinglogobg.png"
                    : feature.name === "MOVING LOGO"
                    ? theme === "dark"
                      ? "/images/darkmovinglogobg.png"
                      : "/images/movinglogobg.png"
                    : theme === "dark"
                    ? "/images/darkdarkmodebg.png"
                    : "/images/darkmodebg.png"
                }
                alt={`${feature.name} Background`}
                fill
                style={{ objectFit: "cover" }}
                className="z-0"
              />
              <span
                className={`absolute inset-0 flex items-center justify-center text-center font-inter font-semibold z-10 ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                {feature.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
