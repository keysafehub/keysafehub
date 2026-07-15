"use client"; // Indica a Next.js che questo codice viene eseguito sul browser del cliente

import { useEffect } from "react";

export default function SuccessPage() {
  useEffect(() => {
    // Questa funzione invia l'evento al nostro server locale in background
    const inviaEventoAMeta = async () => {
      try {
        await fetch("/api/meta-event", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            // Puoi personalizzare questi dati!
            email: "cliente-test@example.com", // Se hai l'email del cliente a disposizione puoi passarla qui
            value: 29.99,                      // Il valore dell'acquisto (es. 29.99 €)
            currency: "EUR",                   // La valuta
            testEventCode: "TEST98135",        // INSERISCI QUI IL TUO CODICE TEST DI META SE STAI FACENDO TEST LIVE, altrimenti lascia vuoto ""
          }),
        });
        console.log("Evento d'acquisto inviato con successo a Meta!");
      } catch (error) {
        console.error("Errore durante l'invio dell'evento a Meta:", error);
      }
    };

    inviaEventoAMeta();
  }, []); // [] fa in modo che l'evento parta UNA sola volta all'apertura della pagina

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
