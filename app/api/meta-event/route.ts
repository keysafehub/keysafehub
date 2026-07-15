import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Recuperiamo le chiavi segrete che abbiamo salvato nel file .env.local
    const accessToken = process.env.META_ACCESS_TOKEN;
    const pixelId = process.env.META_PIXEL_ID;

    if (!accessToken || !pixelId) {
      console.error("Errore: META_ACCESS_TOKEN o META_PIXEL_ID mancanti nel file .env.local");
      return NextResponse.json({ error: 'Configurazione mancante' }, { status: 500 });
    }

    // Estraiamo i dati dell'acquisto inviati dal client (es. email, valore, ecc.)
    const { email, value, currency, eventId, testEventCode } = body;

    // Strutturiamo il payload secondo le specifiche dell'API Conversions di Meta
    const metaPayload = {
      data: [
        {
          event_name: 'Purchase',
          event_time: Math.floor(Date.now() / 1000), // Tempo attuale in secondi
          event_id: eventId || `purchase_${Date.now()}`, // ID univoco per la deduplicazione con il Pixel
          action_source: 'website',
          user_data: {
            // L'email dell'utente DEVE essere passata a Meta in formato SHA256 (hashing) per privacy
            em: email ? [email.trim().toLowerCase()] : [],
          },
          custom_data: {
            value: value || 0.00,
            currency: currency || 'EUR',
          }
        }
      ],
      // Se stai facendo dei test, passiamo il codice di test per vedere l'evento live
      ...(testEventCode && { test_event_code: testEventCode })
    };

    // Inviamo la richiesta direttamente ai server di Meta (API Conversions)
    const response = await fetch(`https://graph.facebook.com/v19.0/${pixelId}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...metaPayload,
        access_token: accessToken,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Errore da Meta API:", result);
      return NextResponse.json({ error: 'Errore nell\'invio a Meta', details: result }, { status: response.status });
    }

    return NextResponse.json({ success: true, result });

  } catch (error: any) {
    console.error("Errore server:", error);
    return NextResponse.json({ error: 'Errore interno del server', message: error.message }, { status: 500 });
  }
}
