export default function Intro() {
  return (
    <div className="flex flex-col justify-center items-center space-y-10 w-full min-h-screen intro-section">
      {/* Intro section */}
      <div className="flex flex-col justify-center items-center gap-10 max-w-6xl">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 px-10">
          <img
            src="profile-picture-cropped.jpeg"
            alt="Profile picture"
            className="lg:w-1/3 w-[20rem] shadow-lg shadow-gray-500/50 
                  rounded-full border-4 border-white"
          />
          <p
            className="lg:w-2/3 w-full p-10 lg:ml-4 lg:text-4xl sm:text-3xl 
                font-semibold text-2xl lg:border-l-4 border-white bg-black 
                rounded-lg text-pretty"
          >
            I&apos;m Ryan, a self-taught full-stack web developer from{" "}
            <span className="text-red-600">Toronto, Canada</span> who is
            passionate about building web applications, solving problems and
            learning new things.
          </p>
        </div>
      </div>
    </div>
  );
}
