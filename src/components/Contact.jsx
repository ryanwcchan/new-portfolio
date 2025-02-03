import PropTypes from "prop-types";

function Card({ link, text, icon, subtext }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="flex flex-col justify-center items-center gap-4 p-5 cursor-pointer
        bg-blue-200 w-64 rounded-lg hover:bg-blue-300 dark:hover:bg-gray-700"
        onClick={() => window.open(link, "_blank")}
      >
        <div className="flex justify-center items-center gap-4">
          <i className={`${icon} text-4xl`}></i>
          <span className="text-2xl">{text}</span>
        </div>
      </div>
      {subtext && (
        <p className="text-2xl bg-blue-100 dark:bg-blue-600 border-2 border-blue-100 px-2 pb-2 rounded-b-lg translate-y-[-4px]">
          {subtext}
        </p>
      )}
    </div>
  );
}

Card.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  subtext: PropTypes.string,
};

export default function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col justify-center p-10 w-full max-w-6xl"
    >
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
            subtext={"ryanwcchan@gmail.com"}
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
