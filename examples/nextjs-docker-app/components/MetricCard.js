// ============================================================
// 📘 METRICCARD.JS — Component Kartu Metrik
// ============================================================
// Component = potongan UI yang bisa dipakai ulang.
// MetricCard menerima "props" (value dan label) dari parent-nya.
//
// 🔑 Konsep:
//   - Props = data yang dikirim dari parent ke child component
//   - Destructuring { value, label } = ambil properti dari props
//   - export default = component utama yang di-export dari file ini
//
// 💡 Cara pakai di halaman:
//   <MetricCard value="UI" label="Halaman utama" />
//   React akan memanggil fungsi ini dengan props = { value: "UI", label: "Halaman utama" }
// ============================================================
export default function MetricCard({ value, label }) {
  return (
    <article className="metricCard">
      {/* {value} → menampilkan isi prop value, misalnya "UI" */}
      <span className="metricValue">{value}</span>
      <span className="metricLabel">{label}</span>
    </article>
  );
}
