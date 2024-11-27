import "./Footer.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__title">
        <a
          href="https://github.com/Fetrw/WheatherApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Melnyk Vlad - {currentYear}
        </a>
      </div>
    </footer>
  );
};
