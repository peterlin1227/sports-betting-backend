const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('體育博弈網站 API 正常運作中！');
});

app.listen(PORT, () => {
  console.log(`伺服器啟動成功，運行於 http://localhost:${PORT}`);
});
