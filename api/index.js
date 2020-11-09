const app = require('express')();
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.json({
    name: 'Duy',
    message: 'Hello from the api container',
  });
});

app.listen(3000);
