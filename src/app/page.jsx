import Image from "next/image";
import Link from "next/link"; // Import Link to navigate to a new page

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center flex-col"
      style={{ backgroundImage: 'url(/images/startbackground.png)' }}
    >
      <div className="text-center flex flex-col items-center justify-center">
        {/* Logo */}
        <div className="animate-bounce-slow mb-8">
          <Image
            src="/images/freekpoclogo5.png"
            alt="Logo"
            width={750}
            height={750}
            priority
          />
        </div>

        {/* Button */}
        <Link
          href="/newpage"
          className="inline-block px-8 py-4 font-bold rounded-full border-2 border-transparent hover:scale-105 transition-all duration-300 shadow-inner"
          style={{
            backgroundColor: '#FFC939',  // Button color
            color: '#FF5D00',            // Text color
            boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.2)', // Custom inner shadow
          }}
        >
          START
        </Link>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-white text-sm">
        © Freek Vermaas 2025
      </footer>
    </div>
  );
}
