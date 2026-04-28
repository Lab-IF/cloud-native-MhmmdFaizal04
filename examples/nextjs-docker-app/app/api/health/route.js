// ============================================================
// 📘 API ROUTE: /api/health
// ============================================================
// File app/api/health/route.js otomatis menjadi endpoint:
//   GET http://localhost:3000/api/health
//
// Ini adalah fitur App Router Next.js:
//   app/api/health/route.js → /api/health
//   app/api/deployments/route.js → /api/deployments
//
// 🔑 Konsep:
//   - NextResponse.json() = mengembalikan response JSON
//   - export function GET() = handler untuk HTTP method GET
//   - dynamic = "force-dynamic" = selalu jalankan ulang (tidak di-cache)
//     Tanpa ini, Next.js akan cache response dan timestamp tidak berubah.
//
// 💡 Endpoint ini dipakai oleh Docker Compose sebagai health check:
//   healthcheck:
//     test: ["CMD", "wget", "-qO-", "http://localhost:3000/api/health"]
// ============================================================
import { NextResponse } from "next/server";
import { getHealthPayload } from "../../../lib/health.mjs";

export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json(getHealthPayload());
}
