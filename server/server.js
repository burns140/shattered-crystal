const express = require('express');
const cors = require('cors');
const path = require('path');
const publicPath = path.join(__dirname, '..', 'client/build');

const PORT = process.env.PORT || 9000;

const app = express();
app.use(express.static(publicPath));
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send(`Server is running on port ${PORT}`);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});