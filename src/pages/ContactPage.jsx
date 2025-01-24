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

export default function ContactPage() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-3xl font-semibold">Get in touch with me!</h1>
        <div className="flex flex-col justify-center gap-4">
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
