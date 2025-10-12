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
          <p
            style={{
              textAlign: "center",
              marginBottom: "10px",
              fontSize: "18px",
              letterSpacing: "1px",
            }}
          >
            Contents
          </p>
          <Link
            style={{
              marginBottom: "8px",
              fontSize: "14px",
              letterSpacing: "1px",
              textAlign: "center",
            }}
            to={"./home"}
          >
            Home
          </Link>
          <Link
            style={{
              marginBottom: "8px",
              fontSize: "14px",
              letterSpacing: "1px",
              textAlign: "center",
            }}
            to="/shop"
          >
            Shop
          </Link>
        </div>
        <div className="footer-socials">
          <p
            style={{
              textAlign: "center",
              marginBottom: "10px",
              fontSize: "18px",
              letterSpacing: "1px",
            }}
          >
            Follow me
          </p>
          <a
            style={{
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            href="https://github.com/ItsJady-Taken"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-square-github fa-2xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
