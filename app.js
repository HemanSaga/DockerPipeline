const express = require("express")
const port = 3000
const app = express()

app.get("/" , (req , res) =>{
    res.send("working on the Docker build pipeline")
});

app.listen(port  , '0.0.0.0' , ()=>{
    console.log(`The server is running live on http://localhost:${port}`)
});