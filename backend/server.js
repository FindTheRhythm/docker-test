const express = require('express');
const app = express();
const port = 5000;
const boardRoutes = require('./routes/boardRoutes');

app.use(express.json());
app.use('/api/boards', boardRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
