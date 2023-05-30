const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.static('static'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

  

app.listen(PORT, ()=>{
    console.log(`😻 Aplicación iniciada en: http://localhost:${PORT}`)
})