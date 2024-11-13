const express = require('express');
const cron = require('node-cron');

const app = express();
const PORT = process.env.PORT || 3000;

// Sample route for the API
app.get('/', (req, res) => {
    res.send('Daily Job API is running!');
});

// Define the job to run every day at 11:00 AM
cron.schedule('0 11 * * 1-3', () => {
    console.log('Job running at 11:00 AM on Monday, Tuesday, or Wednesday');
    // Add the logic of your scheduled job here
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
