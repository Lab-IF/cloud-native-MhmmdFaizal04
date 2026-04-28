// ============================================================
// 📘 DEPLOYMENTSTEP.JS — Component Langkah Deployment
// ============================================================
// Component ini menerima satu prop "step" yang berisi objek:
//   { number: "1", title: "...", description: "...", command: "..." }
//
// 🔑 Konsep:
//   - Props bisa berupa string, number, array, atau OBJECT
//   - step.title → mengakses properti "title" dari objek step
//   - <code> tag → menampilkan teks monospace (untuk perintah terminal)
//
// 💡 Cara pakai:
//   <DeploymentStep step={{ number: "1", title: "Install", description: "...", command: "npm ci" }} />
// ============================================================
export default function DeploymentStep({ step }) {
  return (
    <article className="stepCard">
      <span className="stepNumber">{step.number}</span>
      <div>
        <h3>{step.title}</h3>
        <p>{step.description}</p>
      </div>
      {/* Menampilkan perintah terminal, misal: "docker compose up" */}
      <code className="command">{step.command}</code>
    </article>
  );
}
