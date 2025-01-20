import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative w-full h-24 md:h-32 border-b-2 border-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/headerbackground.svg"
          alt="Header Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>

      {/* Logo */}
      <div className="relative flex items-center justify-center h-full">
        <Link href="/">
          <div className="mt-6 md:mt-8"> {/* Adjusted for logo positioning */}
            <Image
              src="/images/freekpoclogo9.png"
              alt="Logo"
              width={400}
              height={400}
              priority
            />
          </div>
        </Link>
      </div>
    </header>
  );
}
