const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(cors());

const GOOGLE_PLACE_ID = 'ChIJLfvqq3HTlzMRRvydG91RgMk';
const GOOGLE_API_KEY = 'AIzaSyBc8Y1X6d23SkHztVIi6qQcmNlyqxow0uc';

app.get('/api/reviews', async (req, res) => {
  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=reviews&key=${GOOGLE_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data.result?.reviews || []);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
