import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const authHeader = req.headers.get('authorization')

  // IMPOSTA QUI LE TUE CREDENZIALI
  const USERNAME = 'admin'
  const PASSWORD = 'password_segreta_2024' // Cambiala con una tua!

  if (!authHeader) {
    return new NextResponse('Accesso Protetto', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="KeySafeHub - Sito in Manutenzione"',
      },
    })
  }

  const auth = authHeader.split(' ')[1]
  const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':')

  if (user === USERNAME && pwd === PASSWORD) {
    return NextResponse.next()
  }

  return new NextResponse('Credenziali Errate', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="KeySafeHub - Accesso Protetto"',
    },
  })
}

// Applica il blocco a TUTTE le pagine del sito
export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}
