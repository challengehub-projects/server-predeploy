// cron.js
const cron = require('node-cron');

function initCronJobs() {
  // Example 1: Runs every single minute (Good for testing right now!)
  cron.schedule('* * * * *', () => {
    console.log(`[CRON LOG] Running a task every minute: ${new Date().toLocaleTimeString()}`);
    // Put your task logic here (e.g., clear logs, check database, send emails)
  });

  // Example 2: Runs every day at midnight (00:00)
  cron.schedule('0 0 * * *', () => {
    console.log('[CRON LOG] Running daily midnight maintenance task...');
  });
}

module.exports = initCronJobs;
