import PropTypes from "prop-types";

export default function ProjectCard({ title, img, right }) {
  ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    right: PropTypes.bool,
  };

  return (
    <div className="flex justify-center items-center gap-4 w-full flex-1">
      {right ? (
        <>
          <div className="flex flex-col justify-center items-center w-1/3">
            <h1 className="text-2xl">{title}</h1>
          </div>
          <img src={img} className="w-2/3" alt="Project image" />
        </>
      ) : (
        <>
          <img src={img} className="w-2/3" alt="Project image" />
          <div className="flex flex-col justify-center items-center w-1/3">
            <h1 className="text-2xl">{title}</h1>
          </div>
        </>
      )}
    </div>
  );
}
