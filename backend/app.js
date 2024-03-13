const express = require('express');
const path = require('path');
const app = express();

app.use(express.static("../frontend/build"));

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '..', 'frontend', 'build', 'index.html'));
});


app.listen(3000,()=>{
    console.log("Started Listening to port 3000");
})