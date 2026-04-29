# 📝 Jawaban — 01. React vs Next.js

| Info | Detail |
|------|--------|
| **Nama** | Muhammad Faizal |
| **NIM** | 105841104023 |
| **Halaman** | 01. React vs Next.js |
| **Tanggal** | 29 April 2026, 16.27 |

---

## 📝 Kuis Singkat

### 1. Next.js adalah...
**Jawaban:**  
Next.js adalah framework berbasis React untuk membangun aplikasi web modern dengan fitur seperti server-side rendering dan routing otomatis.

---

### 2. Mana yang TIDAK perlu di-install manual di Next.js?
**Jawaban:**  
Routing (karena sudah tersedia secara built-in di Next.js)

---

### 3. Saat install Next.js, agar menggunakan JavaScript (bukan TypeScript), kita harus pilih...
**Jawaban:**  
Pilih **No** saat muncul pertanyaan penggunaan TypeScript.

---

### 4. Apakah komponen React bisa dipakai di Next.js?
**Jawaban:**  
Ya, semua komponen React dapat digunakan di Next.js karena Next.js dibangun di atas React.

---

### 5. Sebutkan minimal 3 fitur yang Next.js berikan di atas React biasa!
**Jawaban:**  
- Server-Side Rendering (SSR)  
- Static Site Generation (SSG)  
- Routing otomatis berbasis file  
- API Routes  
- Image Optimization  

---

## ✏️ Jawaban Latihan

### Latihan 1 — Halaman Utama

    import Image from "next/image";
    import styles from "./page.module.css";

    export default function Home() {
      return (
        <main>
          <h1>🎓 Halo Mahasiswa!</h1>
          <p>Ini proyek Next.js pertama saya.</p>
          <p>Menggunakan <strong>JavaScript</strong>, bukan TypeScript.</p>
        </main>
      );
    }

---

### Latihan 2 — Halaman About

    export default function About() {
      return <h1>Tentang Kami</h1>;
    }

---

### Latihan 3 — Tantangan: Bandingkan Routing

**Jawaban:**  

- **React (tanpa Next.js):**  
  Routing harus diatur secara manual menggunakan library seperti `react-router-dom`.

- **Next.js:**  
  Routing berjalan otomatis berdasarkan struktur file di dalam folder `app/` atau `pages/`.



---

## 📊 Ringkasan

| Metrik | Nilai |
|--------|-------|
| Total dijawab | 0 / 8 |
| Skor kuis | 0 / 4 (0%) |
| Latihan terisi | 0 / 3 |

---

_Dibuat otomatis oleh Sistem Kuis Pertemuan 00_
