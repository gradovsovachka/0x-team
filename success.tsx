export default function PaymentSuccessPage() {
  return (
    <main style={styles.container}>
      <h1 style={styles.success}>✅ Оплата прошла успешно</h1>
      <p>Спасибо! Ваш платеж был успешно обработан.</p>

      <a href="/" style={styles.button}>
        Вернуться на главную
      </a>
    </main>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
    fontFamily: "sans-serif",
  },
  success: { color: "#16a34a" },
  button: {
    marginTop: "16px",
    padding: "10px 16px",
    background: "#16a34a",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
  },
};
