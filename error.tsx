export default function PaymentErrorPage() {
  return (
    <main style={styles.container}>
      <h1 style={styles.error}>❌ Ошибка оплаты</h1>
      <p>К сожалению, платеж не был выполнен. Попробуйте снова.</p>

      <div style={{ display: "flex", gap: "12px" }}>
        <a href="/payment" style={styles.retry}>
          Повторить оплату
        </a>
        <a href="/" style={styles.home}>
          На главную
        </a>
      </div>
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
  error: { color: "#dc2626" },
  retry: {
    padding: "10px 16px",
    background: "#dc2626",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
  },
  home: {
    padding: "10px 16px",
    background: "#6b7280",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
  },
};
