export default function Footer() {
  return (
    <footer
      className="footer p-4 flex gap-2
    justify-center items-center py-10"
    >
      <h1 className="text-2xl">
        Ryan Chan <i>&copy; 2025</i>
      </h1>

      <a
        href="https://github.com/ryanwcchan"
        target="_blank"
        className="text-2xl"
      >
        <i className="fab fa-github" />
      </a>
    </footer>
  );
}
