// ============================================================
// 📘 API ROUTE: /api/deployments
// ============================================================
// Endpoint kedua — mengembalikan data langkah deployment.
// Ini membuktikan bahwa satu aplikasi Next.js bisa punya
// banyak API endpoint, tidak hanya halaman HTML.
//
// 🔑 Konsep:
//   - Bisa import data dari lib/ (sama seperti di page.js)
//   - Tanpa "dynamic = force-dynamic" → response akan di-cache
//     (cocok karena data ini tidak berubah)
// ============================================================
import { NextResponse } from "next/server";
import { deploymentSteps, runtimeChecks } from "../../../lib/teachingData.js";

export function GET() {
  return NextResponse.json({
    service: "nextjs-docker-app",
    purpose: "Data contoh untuk menjelaskan build, run, compose, dan smoke test.",
    steps: deploymentSteps,
    checks: runtimeChecks
  });
}
