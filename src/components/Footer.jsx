import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>MyWebsite</h2>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-socials">
          <a href="https://twitter.com">🐦</a>
          <a href="https://facebook.com">📘</a>
          <a href="https://instagram.com">📸</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
