# syntax=docker/dockerfile:1

# ============================================================
# 📘 DOCKERFILE — Multi-Stage Build untuk Next.js
# ============================================================
# Dockerfile ini menggunakan 4 STAGE untuk menghasilkan
# image production yang kecil dan aman.
#
# 🔑 Kenapa multi-stage?
#   - Stage 1 (base): image dasar yang dipakai stage lain
#   - Stage 2 (deps): install dependency (node_modules)
#   - Stage 3 (builder): jalankan test + build Next.js
#   - Stage 4 (runner): image FINAL yang dijalankan
#
# Hasilnya: image final HANYA berisi file yang dibutuhkan
# untuk menjalankan app (tanpa devDependencies, source code, dll)
# ============================================================

# ── STAGE 1: BASE ───────────────────────────────────────────
# Image dasar: node:20-alpine (Node.js 20 di Alpine Linux)
# Alpine = distro Linux super kecil (~5MB), cocok untuk container
FROM node:20-alpine AS base
WORKDIR /app
# Matikan telemetry Next.js (tidak kirim data ke Vercel)
ENV NEXT_TELEMETRY_DISABLED=1

# ── STAGE 2: DEPS (Dependencies) ────────────────────────────
# Copy package.json lalu install dependency.
# npm ci = install EXACT versi dari package-lock.json (lebih cepat & konsisten)
FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm ci

# ── STAGE 3: BUILDER ────────────────────────────────────────
# Copy node_modules dari stage deps + semua source code,
# lalu jalankan test dan build.
# Jika test gagal → build BERHENTI (tidak lanjut ke stage runner)
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run test && npm run build

# ── STAGE 4: RUNNER (Image Final) ────────────────────────────
# Image ini yang akan dijalankan oleh docker run / docker compose.
# Hanya berisi file hasil build (standalone + static assets).
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

# Membuat user non-root untuk keamanan
# (jangan jalankan container sebagai root!)
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

# Copy HANYA file yang dibutuhkan dari stage builder:
# 1. public/ → file statis (gambar, favicon, dll)
# 2. .next/standalone → server.js + dependency minimal
# 3. .next/static → CSS, JS yang sudah di-bundle
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Jalankan sebagai user non-root
USER nextjs

# Expose port 3000 (dokumentasi, tidak membuka port otomatis)
EXPOSE 3000

# Perintah yang dijalankan saat container dimulai
CMD ["node", "server.js"]
