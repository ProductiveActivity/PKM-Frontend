import createMiddleware from 'next-intl/middleware';
import { hasLocale } from 'next-intl';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

// Daftar path halaman secure yang wajib login
const secureRoutes = ['/dashboard'];

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Cek apakah pathname mengarah ke secure route (dengan atau tanpa prefix locale)
  const isSecureRoute = secureRoutes.some((route) => {
    // Cocokkan `/dashboard`, `/id/dashboard`, `/en/dashboard`, dsb.
    const pattern = new RegExp(`^(/(${routing.locales.join('|')}))?${route}(/.*)?$`);
    return pattern.test(pathname);
  });

  if (isSecureRoute) {
    const token = request.cookies.get('auth_token')?.value;

    if (!token) {
      // Ambil locale dari path atau gunakan defaultLocale
      const segments = pathname.split('/').filter(Boolean);
      const locale = hasLocale(routing.locales, segments[0])
        ? segments[0]
        : routing.defaultLocale;

      const loginUrl = new URL(`/${locale}/login`, request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Delegasikan handling routing multi-bahasa ke next-intl
  return intlMiddleware(request);
}

export const config = {
  // Matcher untuk semua path kecuali file statis, aset Next, favicon, dan api
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
