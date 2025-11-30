const express = require('express');
const app = express();
const PORT = process.env.PORT || 2222;
app.get('/', (req, res) => {
  res.send('Halo Dunia!'); // Mengirimkan teks respons ke klien
});
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
app.listen(PORT, () => {
  let nama = '';
  console.log(`API running at http://localhost:${PORT}`);
  console.log("tes tes");
  readline.question("Siapa Nama Anda? ", (nama) =>{
    console.log('Halo', nama);
    readline.close();
  });
});
