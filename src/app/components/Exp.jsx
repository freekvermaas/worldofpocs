export default function Exp() {
    return (
      <header className="w-full border-b-2 border-black">
        <div className="container mx-auto -px-[2rem] py-8">
          <div className="flex items-center justify-between">
            <div className="w-1/3">
              <div className="flex gap-4 justify-center">
                <button className="px-6 py-2 rounded-full bg-[#FFC939] text-black font-medium">Top</button>
                <button className="px-6 py-2 rounded-full bg-[#FFC939] text-black font-medium">New</button>
              </div>
            </div>
  
            <h1 className="w-1/3 text-4xl text-black font-bold text-center">EXPERIENCES</h1>
  
            <div className="w-1/3">
              <div className="flex justify-center">
                <div className="relative w-full max-w-[200px]">
                  <input
                    type="text"
                    placeholder="Search for..."
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
  
  