const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('.')); // Serve static files directly from root

app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Received contact form submission:', { name, email, message });

    // You can process data here, e.g., save it to a database or send an email.

    res.json({ message: 'Thank you for your message! We will get back to you soon.' });
});

app.listen(port, () => {
    console.log(Server is running at http://localhost:${port});
});
