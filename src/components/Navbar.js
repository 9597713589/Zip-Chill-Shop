import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <div style={styles.nav}>
      <h2>🍹 Zip & Chill</h2>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/cart" style={styles.link}>
          Cart 🛒 ({cartCount})
        </Link>
        <Link to="/login" style={styles.link}>Login</Link>
      </div>
    </div>
  );
}

const styles = {
  nav: {
    background: "linear-gradient(90deg,#ff512f,#dd2476)",
    color: "#fff",
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Navbar;
