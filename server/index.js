let express = require('express')
let cors = require('cors')

let app = express();

app.use(cors())
app.use(express.json());
let PORT = 5000;

let handleGet = function(req, res){
    //console.log(req)
    res.send("Welcome to the new world")
}
let formSubmission = function(req, res){
    //console.log(req)
    let data = req.body;
    console.log(data)
    res.send("Submitted")
}

app.get("/",handleGet);
app.post("/submit/",formSubmission);

app.listen(PORT,()=>{
    console.log(`listening to ${PORT}`);
})


