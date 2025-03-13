const express = require("express");

const app = express();

app.post("/", (req, res) => {
    const cookie = req.headers.cookie;
    if(cookie){
        res.sendFile(`${__dirname}/cookie.png`);
    }
    else{
        res.sendStatus(403);
        res.end();
    }
})

app.post("/login", (req, res) => {
    const cookie = "user=tumpa; samesite=strict; secure";
    // const cookie = "user=tumpa; samesite=lax; secure";
    // const cookie = "user=tumpa; samesite=none; secure";
    // const cookie = "user=tumpa;";

    res.setHeader("set-cookie", [cookie]);
    res.send("ok");
})

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
})

app.get("/img", (req, res) => {
    const cookie = req.headers.cookie;
    if(cookie){
        res.sendFile(`${__dirname}/cookie.png`);
    }
    else{
        res.sendStatus(403); // forbidden
        res.end();
    }
})

app.listen(8080, ()=>{
    console.log("server is listening to port 8080");
    
})
