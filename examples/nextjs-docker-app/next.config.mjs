// ============================================================
// 📘 NEXT.CONFIG.MJS — Konfigurasi Next.js
// ============================================================
// File ini mengatur perilaku Next.js saat build dan runtime.
//
// 🔑 Konsep:
//   - output: "standalone" → build menghasilkan folder standalone
//     yang berisi server.js + semua dependency yang dibutuhkan.
//     Ini PENTING untuk Docker karena ukuran image jauh lebih kecil
//     (tidak perlu copy seluruh node_modules).
//
//   - reactStrictMode: true → React menjalankan component 2x di dev
//     untuk mendeteksi bug/side-effect. Di production tidak berlaku.
//
//   - turbopack.root → memberitahu Turbopack (bundler baru Next.js)
//     di mana root project berada. Diperlukan karena folder parent
//     juga berisi package.json yang bisa membingungkan Turbopack.
//
//   - import.meta.url → URL file ini (file:///path/to/next.config.mjs)
//   - fileURLToPath() → konversi URL ke path sistem (/path/to/next.config.mjs)
//   - dirname() → ambil folder-nya saja (/path/to/)
// ============================================================
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const appRoot = dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  turbopack: {
    root: appRoot
  }
};

export default nextConfig;
