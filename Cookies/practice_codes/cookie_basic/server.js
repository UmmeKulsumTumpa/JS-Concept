const app = require("express")()

app.get("/", (req, res) => {
    res.setHeader("set-cookie", ["setfromserver=servercookie"]);
    res.sendFile(`${__dirname}/index.html`);
});

app.get("/path1", (req, res) => {
    res.send(`Path1 has been send this cookie ${req.headers.cookie}`);
});

app.get("/path2", (req, res) => {
    res.send(`Path2 has been send this cookie ${req.headers.cookie}`);
});

app.listen(8000, ()=>{
    console.log("Listening to port 8000");
    
});
