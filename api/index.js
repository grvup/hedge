const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./mongodb');
const orderRoutes = require('./routes/orderRoutes');
const itemRoutes = require('./routes/itemRoutes');
const cors = require('cors')

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

connectDB();



app.use('/api/orders', orderRoutes);
app.use('/api/items', itemRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
