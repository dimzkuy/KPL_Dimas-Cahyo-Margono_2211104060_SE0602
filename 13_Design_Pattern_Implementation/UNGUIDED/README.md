# Observer Pattern dengan Fitur Unsubscribe Otomatis
Dimas Cahyo Margono - 2211104060 - SE-06-02

## Deskripsi

Proyek ini merupakan implementasi dari **Observer Pattern** menggunakan JavaScript (Node.js), dengan tambahan fitur **unsubscribe otomatis**. Fitur ini membuat setiap observer berhenti menerima notifikasi setelah menerima 3 kali notifikasi dari subject.

## Struktur File

- `main.js` – Menjalankan simulasi observer pattern.
- `subject.js` – Mendefinisikan class Subject (publisher).
- `observer.js` – Interface observer (jika digunakan untuk struktur).
- `concreteObserver.js` – Mendefinisikan observer dengan counter dan logika unsubscribe.

## Fitur Utama

- Observer dapat berlangganan (`attach`) dan berhenti (`detach`) secara manual.
- Setelah menerima 3 notifikasi, observer akan otomatis unsubscribe.
- Log aktivitas ditampilkan di console (siapa yang menerima notifikasi, dan siapa yang berhenti berlangganan).

## Cara Menjalankan

1. Pastikan Node.js sudah terinstall.
2. Jalankan perintah:
   ```bash
   node main.js
   ```
3. Lihat hasil log di terminal.

## Contoh Output

```
Observer ditambahkan.
Observer ditambahkan.
Notifikasi ke semua observer...
Observer 1 menerima notifikasi: Update versi 1.0
Observer 2 menerima notifikasi: Update versi 1.0
...
Observer 1 berhenti berlangganan setelah 3 notifikasi.
```

## Catatan Teknis

- Pada `notify(data)` di `subject.js`, referensi ke subject (`this`) dikirim ke observer agar mereka bisa memanggil `detach(this)`.
- Counter notifikasi disimpan di dalam masing-masing `ConcreteObserver`.
