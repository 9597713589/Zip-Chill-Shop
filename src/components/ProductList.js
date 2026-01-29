import products from "../data/products";

function ProductList({ addToCart }) {
  return (
    <div style={styles.grid}>
      {products.map(item => (
        <div key={item.id} style={styles.card}>
          <img src={item.image} style={styles.img} />
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
          <button style={styles.btn} onClick={() => addToCart(item)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: 20,
    padding: 30,
  },
  card: {
    background: "#fff",
    padding: 15,
    borderRadius: 15,
    textAlign: "center",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  },
  img: {
    width: "100%",
    height: 180,
    objectFit: "cover",
    borderRadius: 10,
  },
  btn: {
    background: "#ff7a18",
    color: "#fff",
    border: "none",
    padding: 10,
    borderRadius: 20,
    cursor: "pointer",
  },
};

export default ProductList;
