const express = require('express');
const app = express();
const PORT = 3000;

// Sample quotes array
const quotes = [
    "🔥 Code is like humor. When you have to explain it, it’s bad. — Cory House",
    "💡 First, solve the problem. Then, write the code. — John Johnson",
    "🚀 Experience is the name everyone gives to their mistakes. — Oscar Wilde",
    "✨ JavaScript is the duct tape of the Internet. — Charlie Campbell",
    "🌟 Clean code always wins. — Robert C. Martin"
];

// Serve homepage
app.get('/', (req, res) => {
    // Pick random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Send HTML page
    res.send(`
        <html>
            <head>
                <title>Super Node App</title>
                <style>
                    body { font-family: Arial; text-align: center; background: #1a1a2e; color: #fff; padding-top: 100px; }
                    h1 { color: #e94560; }
                    p { font-size: 24px; margin-top: 20px; }
                    button { padding: 10px 20px; font-size: 18px; margin-top: 30px; cursor: pointer; background: #0f3460; color: #fff; border: none; border-radius: 5px; }
                    button:hover { background: #e94560; }
                </style>
            </head>
            <body>
                <h1>Welcome to My Super Node App 🚀</h1>
                <p id="quote">${randomQuote}</p>
                <button onclick="window.location.reload()">Get Another Quote</button>
            </body>
        </html>
    `);
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));