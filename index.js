require('dotenv').config()

const express = require('express');
const axios = require('axios')

const PORT = process.env.PORT;

const app = express();

app.use('/',async (req,res) => {
  console.log(req.headers);
  try {
    const authorization  = req.headers.authorization ? req.headers.authorization : null 
    const result = await axios.get(`https:/${req.originalUrl}`, { headers: {authorization} } )
    res.status(200).json(result.data)
  } catch(err) {
    console.error(err.message)
    res.status(500).send('server error')
  }
})

app.listen(PORT, () => {
  console.log(`Server up and runnign on : ${PORT}`);
})
