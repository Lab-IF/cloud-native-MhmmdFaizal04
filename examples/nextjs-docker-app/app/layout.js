// ============================================================
// 📘 LAYOUT.JS — Layout Global Next.js
// ============================================================
// File ini adalah "bungkus" untuk SEMUA halaman di aplikasi.
// Apapun halaman yang dibuka (/, /about, dll), isinya akan
// masuk ke dalam {children} di bawah.
//
// 🔑 Konsep penting:
//   - import CSS di sini = berlaku untuk SELURUH halaman
//   - metadata = mengatur <title> dan <meta description> (SEO)
//   - {children} = isi halaman yang sedang dibuka
//   - RootLayout WAJIB ada di app/layout.js (Next.js App Router)
// ============================================================

// Import CSS global — semua class di globals.css bisa dipakai
// di halaman manapun karena di-import di sini
import "./globals.css";

// metadata adalah fitur Next.js untuk mengatur <head> halaman.
// Ini menggantikan penggunaan tag <title> dan <meta> manual.
export const metadata = {
  title: "Next.js Docker App",
  description: "Contoh implementasi Next.js yang siap dikemas dengan Docker"
};

// RootLayout membungkus semua halaman.
// Parameter { children } berisi konten halaman yang sedang aktif.
// Contoh: jika user buka "/", children = isi dari app/page.js
//         jika user buka "/about", children = isi dari app/about/page.js
export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
