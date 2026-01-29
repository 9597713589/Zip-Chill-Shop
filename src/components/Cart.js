import { Link } from "react-router-dom";

function Cart({ cart, setCart }) {

  const inc = id =>
    setCart(cart.map(i => i.id === id ? { ...i, qty: i.qty + 1 } : i));

  const dec = id =>
    setCart(cart.map(i =>
      i.id === id && i.qty > 1 ? { ...i, qty: i.qty - 1 } : i));

  const remove = id =>
    setCart(cart.filter(i => i.id !== id));

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <div style={styles.box}>
      <h2>Your Cart</h2>

      {cart.map(item => (
        <div key={item.id} style={styles.item}>
          <img src={item.image} style={styles.img} />
          <div>
            <b>{item.name}</b>
            <p>₹{item.price}</p>

            <button onClick={() => dec(item.id)}>-</button>
            <span> {item.qty} </span>
            <button onClick={() => inc(item.id)}>+</button>

            <br />
            <button onClick={() => remove(item.id)}>❌ Remove</button>
          </div>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>

      <Link to="/checkout">
        <button style={styles.checkout}>Proceed to Checkout</button>
      </Link>
    </div>
  );
}

const styles = {
  box: { padding: 30 },
  item: { display: "flex", gap: 15, marginBottom: 15 },
  img: { width: 80, height: 80, borderRadius: 10 },
  checkout: {
    background: "green",
    color: "#fff",
    padding: 12,
    border: "none",
    borderRadius: 20,
  },
};

export default Cart;
