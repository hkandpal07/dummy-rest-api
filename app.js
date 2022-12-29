const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/todos', async (req, res) => {
  try {
    const apiResponse = await axios.get('https://jsonplaceholder.typicode.com/todos');
    res.status(200).send(apiResponse.data)
  } catch(err) {
    res.status(500).send(err)
  }
})

app.get('/users/:userId', async (req, res) => {
  try {
    const userId = req.params.userId
    const apiResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    res.status(200).send(apiResponse.data) 
  } catch (err) {
    res.status(500).send(err);
  }
})

app.listen(4500, () => {
  console.log('Service is running at port 4500');
})