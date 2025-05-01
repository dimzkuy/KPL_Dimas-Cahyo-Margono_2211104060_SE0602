const express = require('express');
const app = express();
const port = 3000;
 
app.use(express.json());
 
// Simpan data mahasiswa di array static
let mahasiswa = [
  { nama: "Dimas Cahyo Margono", nim: "2211104060" },
  { nama: "Cristiano Ronaldo", nim: "1302000001" },
  { nama: "Lionel Messi", nim: "1302000002" }
];
 
// GET semua mahasiswa
app.get('/api/mahasiswa', (req, res) => {
  res.json(mahasiswa);
});
 
// GET mahasiswa berdasarkan index
app.get('/api/mahasiswa/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < mahasiswa.length) {
    res.json(mahasiswa[index]);
  } else {
    res.status(404).json({ message: 'Data tidak ditemukan' });
  }
});
 
// POST mahasiswa baru
app.post('/api/mahasiswa', (req, res) => {
  const { nama, nim } = req.body;
  mahasiswa.push({ nama, nim });
  res.status(201).json({ message: 'Data berhasil ditambahkan' });
});
 
// DELETE mahasiswa berdasarkan index
app.delete('/api/mahasiswa/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < mahasiswa.length) {
    mahasiswa.splice(index, 1);
    res.json({ message: 'Data berhasil dihapus' });
  } else {
    res.status(404).json({ message: 'Data tidak ditemukan' });
  }
});
 
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});