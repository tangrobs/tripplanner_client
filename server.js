const express = require("express")
const path = require("path")

const app = express()

app.use(express.static(path.join(__dirname + "/client/dist/client")))

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./client/dist/client/index.html"))
});

app.listen(8000,()=>console.log("listening on port 8000"));
