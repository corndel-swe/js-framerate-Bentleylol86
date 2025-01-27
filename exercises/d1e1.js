import express from 'express';

const app = express();

// Configure the app to serve static files from 'exercises/public'
app.use(express.static('exercises/public'));

export default app;
