import PropTypes from "prop-types";

export default function ProjectCard({ title, img, right }) {
  ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    right: PropTypes.bool,
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-4 w-full flex-1 dark:text-white">
      <div
        className={`flex flex-col justify-center items-center w-1/3 ${
          right ? "order-1" : "order-2"
        }`}
      >
        <h1 className="text-2xl">{title}</h1>
      </div>
      <img
        src={img}
        className={`w-2/3 rounded-lg ${right ? "order-2" : "order-1"}`}
        alt="Project image"
      />
    </div>
  );
}
