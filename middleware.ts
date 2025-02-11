import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
  /*

    Artinya: Middleware akan berjalan untuk semua route KECUALI:

    /api/* → Middleware tidak akan berjalan untuk request API.
    /_next/static/* → Middleware tidak akan berjalan untuk file statis.
    /_next/image/* → Middleware tidak akan berjalan untuk Next.js Image Optimization.
    Semua file yang diakhiri .png → Middleware tidak akan berjalan untuk gambar PNG.


    Matcher ini berguna untuk:

    Mencegah middleware dieksekusi di API Routes, karena biasanya API tidak perlu autentikasi yang sama seperti halaman biasa.
    Meningkatkan performa dengan mengecualikan file statis dan gambar agar middleware tidak menghambat pemrosesan.
    Membatasi middleware hanya untuk halaman tertentu, misalnya hanya halaman dashboard atau area yang butuh autentikasi.




  */
};
