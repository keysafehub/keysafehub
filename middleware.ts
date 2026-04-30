import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const authHeader = req.headers.get('authorization');

  // Imposta qui le tue credenziali
  const USER = 'admin'; 
  const PASS = 'sviluppo2024'; // Cambiala con una tua password

  if (authHeader !== `Basic ${btoa(`${USER}:${PASS}`)}`) {
    return new NextResponse('Area protetta: inserisci le credenziali', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  }

  return NextResponse.next();
}