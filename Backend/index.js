const express = require('express');
const cors = require('cors');
const app = express();

const supabase = require('./PostgreDAL/dbService');
require('dotenv').config();


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Express backend!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  
(async () => {
  const { data, error } = await supabase
    .from('Test')
    .select('*')
    .limit(1);

  if (error) {
    console.error("❌ Supabase connection failed:", error.message);
  } else {
    console.log("✅ Supabase connected! Sample data:", data);
  }
})();
});