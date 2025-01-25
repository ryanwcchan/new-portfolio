export default function Hero() {
  return (
    <div className="flex flex-col min-h-screen items-center w-full justify-center">
      <div className="flex flex-col justify-center items-center">
        {/* <img src="RYAN CHAN.svg" alt="Name title" className="font-2xl" /> */}
        <h1 className="text-6xl font-bold text-center">
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
