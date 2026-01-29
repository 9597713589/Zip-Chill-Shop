import { useState } from "react";

function Checkout() {
  const [success, setSuccess] = useState(false);

  const placeOrder = () => {
    setSuccess(true);
  };

  return (
    <div style={styles.bg}>
      <div style={styles.box}>
        {!success ? (
          <>
            <h2 style={styles.title}>💳 Checkout</h2>

            <input style={styles.input} placeholder="Full Name" />
            <input style={styles.input} placeholder="Address" />
            <input style={styles.input} placeholder="Phone Number" />
            <input style={styles.input} placeholder="Payment Method (UPI / Card)" />

            <button style={styles.btn} onClick={placeOrder}>
              Place Order
            </button>
          </>
        ) : (
          <div style={styles.successBox}>
            <h2>🎉 Order Placed Successfully!</h2>
            <p>Thank you for ordering from Zip & Chill 🍹</p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  bg: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    background: "#fff",
    padding: "30px",
    width: "380px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },
  title: {
    textAlign: "center",
    marginBottom: "25px",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    outline: "none",
  },
  btn: {
    width: "100%",
    padding: "12px",
    background: "#ff512f",
    color: "#fff",
    border: "none",
    borderRadius: "25px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  },
  successBox: {
    textAlign: "center",
    padding: "20px",
  },
};

export default Checkout;
