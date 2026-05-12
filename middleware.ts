import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization')
  const url = req.nextUrl

  // --- CREDENZIALI ---
  // Utente: admin
  // Password: password2024
  // La stringa qui sotto è la codifica base64 di "admin:password2024"
  const AUTH_STRING = 'Basic YWRtaW46cGFzc3dvcmQyMDI0'

  if (basicAuth === AUTH_STRING) {
    return NextResponse.next()
  }

  return new NextResponse('Autenticazione richiesta', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Area Protetta KeySafeHub"',
    },
  })
}

export const config = {
  matcher: [
    /*
     * Protegge tutte le pagine tranne:
     * - api (servizi interni)
     * - _next/static (file grafici)
     * - _next/image (immagini ottimizzate)
     * - favicon.ico (icona sito)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
