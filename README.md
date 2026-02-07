# HTML to PDF — Panduan Singkat

**Deskripsi**
- **Tujuan**: Menjelaskan cara menghasilkan file PDF dari file HTML menggunakan skrip Node.js dan Puppeteer.

**Prasyarat**
- **Node.js**: Terpasang (v12+ direkomendasikan).
- **npm**: tersedia bersama Node.js.

**Instalasi**
- Jalankan dependensi (jika belum ada):

```
npm install
npm install puppeteer --save
```

**Cara Pakai**
- Untuk menghasilkan PDF dari [surat_pemberhentian.html](surat_pemberhentian.html), jalankan:

```
node SuratPemberhentian.js
```

- Untuk menghasilkan PDF dari [surat_orangtua.html](surat_orangtua.html), jalankan:

```
node SuratOrangTua.js
```

- Skrip-skrip tersebut:
  - [SuratPemberhentian.js](SuratPemberhentian.js): membaca `surat_pemberhentian.html` lalu menyimpan `Surat-Pemberhentian.pdf`.
  - [SuratOrangTua.js](SuratOrangTua.js): membuka `surat_orangtua.html` (via `file://`) lalu menyimpan `Surat-Orang-Tua.pdf`.

**Kustomisasi HTML**
- Edit isi atau gaya di [surat_pemberhentian.html](surat_pemberhentian.html) dan [surat_orangtua.html](surat_orangtua.html) seperti biasa.
- Perhatikan ukuran halaman dan margin di CSS `@page` untuk hasil PDF yang sesuai.

**Opsi Puppeteer yang berguna**
- Jika perlu menonaktifkan sandbox (mis. environment tertentu), ubah panggilan `puppeteer.launch()` di skrip menjadi:

```
puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] })
```

**Output**
- File PDF akan dihasilkan di folder kerja:
  - `Surat-Pemberhentian.pdf`
  - `Surat-Orang-Tua.pdf`

**Troubleshooting**
- Jika Chromium tidak terunduh otomatis atau `puppeteer.launch()` gagal, jalankan `npm install puppeteer --ignore-scripts=false` atau periksa koneksi internet.
- Jika PDF kosong atau styling hilang, pastikan semua resource (CSS/gambar) dapat diakses; gunakan `printBackground: true` pada `page.pdf()` (sudah diatur pada contoh).

**Kontak / Lanjutan**
- [Instagram](https://www.instagram.com/shoyou.nt/)
