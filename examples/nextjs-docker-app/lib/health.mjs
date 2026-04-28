// ============================================================
// 📘 HEALTH.MJS — Fungsi Helper untuk Health Check
// ============================================================
// File ini BUKAN component — ini adalah "utility/helper function".
// Dipakai oleh API route (/api/health) untuk menghasilkan payload
// JSON yang menunjukkan status aplikasi.
//
// 🔑 Konsep:
//   - Fungsi murni (pure function) — tidak mengubah state apapun
//   - Default parameter { now, uptime, env } = bisa di-override saat testing
//   - process.env = environment variable dari sistem operasi/Docker
//   - || "nilai" = operator OR — jika env kosong/undefined, pakai default
//   - .mjs extension = file ini menggunakan ES Module (import/export)
//
// 💡 Kenapa health check penting untuk Docker?
//   Docker Compose menggunakan endpoint /api/health untuk mengecek
//   apakah container benar-benar berjalan dan responsif, bukan hanya hidup.
// ============================================================
export function getHealthPayload({ now = new Date(), uptime = process.uptime(), env = process.env } = {}) {
  return {
    status: "ok",
    service: "nextjs-docker-app",
    // Prioritas: APP_VERSION → npm_package_version → "0.1.0"
    version: env.APP_VERSION || env.npm_package_version || "0.1.0",
    // APP_ENV bisa diatur di docker-compose.yaml atau docker run -e
    environment: env.APP_ENV || "development",
    message:
      env.NEXT_PUBLIC_APP_MESSAGE ||
      "Next.js is running with UI, API routes, and container-ready runtime config.",
    uptimeSeconds: Math.round(uptime),
    timestamp: now.toISOString()
  };
}
