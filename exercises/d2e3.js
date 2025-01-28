import express from 'express';

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'exercises/views');

// Configure the app to use URL-encoded form data
app.use(express.urlencoded({ extended: true }));

app.get('/d2e3', (req, res) => {
  res.render('d2e3');
});

app.post('/submit', (req, res) => {
  // Extract the `name` and `email` from the form
const name = req.body.name;
const email = req.body.email;


  res.send(`Received: ${name}, ${email}`);
});

export default app;
