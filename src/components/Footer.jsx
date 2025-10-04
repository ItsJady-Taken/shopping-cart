import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <p style={{ margin: "0px", fontSize: "18px", letterSpacing: "1px" }}>
            Address
          </p>
          <p
            style={{
              fontSize: "14px",
              letterSpacing: "1px",
              marginBottom: "20px",
            }}
          >
            123 Main St, City, Country
          </p>
          <p style={{ margin: "0px", fontSize: "18px", letterSpacing: "1px" }}>
            Contact
          </p>
          <p
            style={{
              fontSize: "14px",
              letterSpacing: "1px",
              margin: "0",
            }}
          >
            Phone: (123) 456-7890
          </p>
          <p
            style={{
              fontSize: "14px",
              letterSpacing: "1px",
              margin: "0",
            }}
          >
            Email: 8XHb9@example.com
          </p>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="footer-links">
          <p style={{ margin: "0px", fontSize: "18px", letterSpacing: "1px" }}>
            Contact
          </p>
          <Link to={"./home"}>Home</Link>
          <Link href="/services">Shop</Link>
          <Link href="/contact">Contact</Link>
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
