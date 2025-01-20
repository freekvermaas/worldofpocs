export default function Exp() {
  return (
    <header className="w-full border-b-2 border-black">
      <div className="container mx-auto px-4 h-24 md:h-32">
        <div className="flex flex-col h-full">
          <div className="flex-grow flex items-center justify-between">
            <div className="flex space-x-2">
              <button className="w-8 h-8 rounded-full bg-[#FFC939]">Top</button>
              <button className="w-8 h-8 rounded-full bg-[#FFC939]">New</button>
            </div>
          </div>
          <div className="flex-shrink-0 pb-4 flex justify-center">
            <p className="text-center text-2xl sm:text-3xl font-inter font-semibold text-black">EXPERIENCES</p>
          </div>
        </div>
      </div>
    </header>
  )
}

