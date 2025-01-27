import express from 'express';
import Movie from '../models/Movie.js';

const app = express();

app.get("/", async () => {
const films = await Movie.findAll();
console.log('Movies done?', films);
} )

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;

