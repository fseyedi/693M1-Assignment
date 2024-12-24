import express from 'express';

const app = express();
const port = 5001;

// Set the 'public' folder as static
app.use(express.static('public'));

// Route to load 'index.html'
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

// Listen on port 5000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
