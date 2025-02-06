export default function Interests() {
  return (
    <div
      id="contact"
      className="flex flex-col justify-center p-10 w-full max-w-6xl gap-4"
    >
      <h1 className="text-4xl font-semibold dark:text-white">Interests</h1>

      <div>
        <h2 className="text-3xl font-semibold text-blue-400 dark:text-blue-200">
          Health & Wellness
        </h2>
        <p className="text-2xl">
          I enjoy strength training, calisthenics, and cardio. I challenge
          myself by learning new movements through continuous practice, aiming
          to improve my mobility, strength, and endurance.
        </p>
        <video className="pt-4" controls preload="metadata" loading="lazy">
          <source src="FLIX3599.webm" type="video/webm" />
          <source src="FLIX3599.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="text-2xl py-2 text-gray-600 dark:text-gray-400">
          My brother and I doing a synchronized back flip!
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-blue-400 dark:text-blue-200">
          Learning
        </h2>
        <p className="text-2xl">
          I have a deep passion for learning and exploring new skills, whether
          in fitness, technology, or personal growth. I enjoy pushing my limits
          and embracing challenges that expand my knowledge and abilities.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-blue-400 dark:text-blue-200">
          Other Interests
        </h2>
        <p className="text-2xl">
          I love reading thought-provoking books, hiking, and EDM and Hardstyle
          music. I also enjoy playing strategy games and video games.
        </p>
      </div>
    </div>
  );
}
