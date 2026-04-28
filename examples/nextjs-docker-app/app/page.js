// ============================================================
// 📘 PAGE.JS — Halaman Utama (/)
// ============================================================
// File app/page.js otomatis menjadi halaman di URL "/"
// (root/beranda). Ini adalah fitur App Router Next.js:
//   app/page.js        → http://localhost:3000/
//   app/about/page.js  → http://localhost:3000/about
//
// 🔑 Konsep penting di file ini:
//   1. Import component dari folder components/
//   2. Import data dari folder lib/
//   3. Membaca environment variable (process.env)
//   4. Mengembalikan JSX — mirip HTML tapi di dalam JavaScript
//   5. className dipakai sebagai pengganti class (karena JSX)
//   6. {variabel} di dalam JSX = menampilkan nilai variabel
// ============================================================

// Import component — UI yang bisa dipakai ulang
// Component dipisah agar page.js tidak terlalu panjang
import DeploymentStep from "../components/DeploymentStep.js";
import MetricCard from "../components/MetricCard.js";

// Import data dari lib/ — data dipisah dari halaman agar:
// 1. page.js lebih rapi dan mudah dibaca
// 2. Data bisa dipakai di halaman lain juga
// 3. Data bisa dites secara terpisah (npm test)
import {
  deploymentSteps,
  featureCards,
  runtimeChecks,
  teachingMetrics
} from "../lib/teachingData.js";

export default function Home() {
  // 🔑 ENVIRONMENT VARIABLE
  // process.env.NEXT_PUBLIC_... = membaca env variable
  // Prefix NEXT_PUBLIC_ = boleh dibaca di browser (client-side)
  // Tanpa prefix (APP_ENV, APP_VERSION) = hanya bisa dibaca di server
  // || "nilai default" = jika env belum diatur, pakai nilai ini
  const dockerImage = process.env.NEXT_PUBLIC_DOCKER_IMAGE || "nextjs-docker-app:kelas";
  const message =
    process.env.NEXT_PUBLIC_APP_MESSAGE ||
    "Aplikasi ini punya UI, API route, env var, dan health check untuk didockerisasi.";

  // 🔑 JSX — mirip HTML tapi di dalam JavaScript
  // Perbedaan utama:
  //   - className (bukan class) — karena "class" sudah dipakai di JS
  //   - {variabel} — menampilkan nilai variabel JavaScript
  //   - {array.map(...)} — loop untuk render list item
  //   - <Component /> — memanggil component (huruf kapital)
  return (
    <main>
      <section className="hero">
        {/* className="hero" → lihat style .hero di globals.css */}
        <p className="eyebrow">Cloud Native + DevOps Practicum</p>
        <div className="heroGrid">
          <div>
            <h1>Next.js yang benar-benar siap masuk container</h1>
            <p className="lead">
              {message} Mahasiswa bisa melihat bahwa Docker bukan hanya membungkus folder,
              tetapi menjalankan aplikasi web production dengan konfigurasi runtime.
            </p>
            <div className="heroActions">
              <a href="/api/health">Cek API Health</a>
              <a href="/api/deployments" className="secondary">
                Lihat Data Deploy
              </a>
            </div>
          </div>
          <aside className="terminalCard" aria-label="Contoh command Docker">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
            <pre>{`docker build -t ${dockerImage} .
docker run --rm -p 3000:3000 \\
  -e APP_ENV=docker \\
  ${dockerImage}`}</pre>
          </aside>
        </div>
      </section>

      {/* 🔑 LOOP DENGAN .map()
          teachingMetrics adalah array dari lib/teachingData.js
          .map() mengulang setiap item dan membuat <MetricCard> untuk masing-masing
          key={...} wajib di React agar tahu item mana yang berubah
          {...metric} = spread operator, mengirim semua property sebagai props */}
      <section className="metrics" aria-label="Ringkasan materi">
        {teachingMetrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </section>

      <section className="contentGrid">
        <div className="panel">
          <p className="eyebrow">Implementasi yang masuk container</p>
          <h2>Apa isi aplikasinya?</h2>
          <div className="features">
            {featureCards.map((feature) => (
              <article key={feature.title}>
                <span>{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="panel accent">
          <p className="eyebrow">Runtime checks</p>
          <h2>Yang bisa dibuktikan saat demo</h2>
          <ul className="checkList">
            {runtimeChecks.map((check) => (
              <li key={check}>{check}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="panel">
        <p className="eyebrow">Alur praktikum</p>
        <h2>Dari kode sampai container berjalan</h2>
        <div className="steps">
          {deploymentSteps.map((step) => (
            <DeploymentStep key={step.title} step={step} />
          ))}
        </div>
      </section>
    </main>
  );
}
