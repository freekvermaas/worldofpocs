export default function Footer() {
    return (
      <footer className="bg-[#212121] py-6 px-8 font-inter border-t-8 border-[#FFC939]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-between">

            <div>
              <h3 className="text-[#696969] text-sm mb-4">CONTACT</h3>
              <div className="space-y-2">
                <p className="text-white">freekvermaas@gmail.com</p>
                <p className="text-white">+31 6 42263774</p>
              </div>
            </div>
  
            <div>
              <h3 className="text-[#696969] text-sm mb-4">CONNECT</h3>
              <div className="space-y-2">
                <p>
                  <a href="https://www.instagram.com/freekvermaas" className="text-white hover:text-zinc-300">
                    Instagram
                  </a>
                </p>
                <p>
                  <a href="https://www.linkedin.com/in/freekvermaas/" className="text-white hover:text-zinc-300">
                    LinkedIn
                  </a>
                </p>
                <p>
                  <a href="https://www.freekvermaas.com/" className="text-white hover:text-zinc-300">
                    Portfolio
                  </a>
                </p>
              </div>
            </div>
  
            <div className="flex justify-end">
              <a href="/" className="inline-block">
                <img src="/images/worldofpocslogofooter.png" alt="World of poc's" />
              </a>
            </div>
          </div>
  
          <div className="mt-12 text-center text-white text-sm">© Freek Vermaas 2025. All rights reserved.</div>
        </div>
      </footer>
    );
}
