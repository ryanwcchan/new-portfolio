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
        <p className="text-2xl pb-4">
          I enjoy strength training, calisthenics, and cardio. I challenge
          myself by learning new movements through continuous practice, aiming
          to improve my mobility, strength, and endurance.
        </p>
        <iframe
          className="w-full aspect-video"
          src="https://www.youtube.com/embed/yMr2wRAnnpo"
          title="Synchronized backflip with my brother"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
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
          I love reading thought-provoking books, hiking, EDM music, martial
          arts, and cinematography.
        </p>
      </div>
    </div>
  );
}
