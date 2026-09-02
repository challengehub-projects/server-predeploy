// server.js
const express = require('express');
const initCronJobs = require('./cron'); // Import your cron jobs

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get("/", (req, res) => {
    res.status(200).send("Welcome!")
})

// Start the cron jobs immediately when the server starts
initCronJobs();

app.listen(PORT, () => {
  console.log(`Server running safely on port ${PORT}`);
});
