import PropTypes from "prop-types";

function Card({ link, text, icon }) {
  return (
    <div
      className="flex justify-center items-center gap-4 p-5 cursor-pointer 
      bg-gray-100 w-64 rounded-lg hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
      onClick={() => window.open(link, "_blank")}
    >
      <i className={`${icon} text-4xl`}></i>
      <span className="text-2xl">{text}</span>
    </div>
  );
}

Card.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default function Contact() {
  return (
    <div className="flex flex-col justify-center p-10 w-full max-w-6xl">
      <h1 className="text-4xl font-semibold dark:text-white">Contact Me</h1>
      <p className="text-2xl dark:text-white py-6">
        Have a question or interested in collaborating? Please reach out over
        email or LinkedIn!
      </p>
      <div className="flex flex-col justify-center items-center gap-4 my-auto py-10">
        <div className="flex flex-col justify-center gap-4">
          <Card
            link={"mailto:ryanwcchan@gmail.com"}
            text={"Email"}
            icon={"fa fa-envelope"}
          />
          <Card
            link={"https://github.com/ryanwcchan"}
            text={"GitHub"}
            icon={"fab fa-github"}
          />
          <Card
            link={"https://www.linkedin.com/in/ryanwcchan"}
            text={"LinkedIn"}
            icon={"fab fa-linkedin"}
          />
        </div>
      </div>
    </div>
  );
}
