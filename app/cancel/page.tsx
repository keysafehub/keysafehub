export default function CancelPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "20px" }}>
        Pagamento annullato
      </h1>

      <p style={{ fontSize: "1.2rem", maxWidth: "600px", lineHeight: "1.6" }}>
        Nessun importo è stato addebitato.  
        Puoi riprovare quando vuoi.
      </p>
    </div>
  );
}
