const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;
const API_URL = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes'

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

app.get('/', async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    const quote = response.data[0];
    res.render('index', { quote });
  } catch (error) {
    res.render('index', { quote: 'Error when searching for quote.' });
  }
});
