import Image from "next/image";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: 'url(/images/startbackground.png)' }}
    >
      <div className="animate-bounce-slow">
        <Image
          src="/images/freekpoclogo5.png"
          alt="Logo"
          width={750}
          height={750}
          priority
        />
      </div>
    </div>
  );
}
