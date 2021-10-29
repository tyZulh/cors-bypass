require('dotenv').config()

const express = require('express');
const axios = require('axios')

const PORT = process.env.PORT;

const app = express();

app.get('/:url', async (req, res) => {
  try {
    const result = await axios.get(req.originalUrl)
    res.status(200).json(result)
  } catch(err) {
    console.error(err)
    res.status(500).send('server error')
  }
})

app.listen(PORT, () => {
  console.log(`Server up and runnign on : ${PORT}`);
})
