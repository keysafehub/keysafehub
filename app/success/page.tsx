export default function SuccessPage() {
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
        Grazie per il tuo acquisto!
      </h1>

      <p style={{ fontSize: "1.2rem", maxWidth: "600px", lineHeight: "1.6" }}>
        La tua licenza è stata inviata via email.  
        Se non dovesse arrivare entro pochi minuti, controlla la cartella spam oppure scrivi a:
      </p>

      <p
        style={{
          marginTop: "15px",
          fontSize: "1.2rem",
          fontWeight: "bold",
          color: "#0070f3",
        }}
      >
        info@keysafehub.eu
      </p>
    </div>
  );
}
