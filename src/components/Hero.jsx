export default function Hero() {
  return (
    <div className="flex flex-col min-h-screen items-center w-full justify-center hero-section">
      <div className="flex flex-col justify-center items-center gap-6 rounded-lg p-10">
        {/* <img src="RYAN CHAN.svg" alt="Name title" className="font-2xl" /> */}

        <div className="">
          <img src="logo-cropped.png" alt="Logo" className="w-24" />
        </div>
        <h1 className="text-6xl font-bold text-center bg-black text-white px-4">
          RYAN<span className="text-red-400">.</span>CHAN
        </h1>
        <h1 className="text-6xl font-bold text-center text-white bg-black py-2 px-4">
          Full-Stack Web Developer
        </h1>
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}
