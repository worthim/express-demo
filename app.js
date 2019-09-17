const express = require('express')

const app = express();

app.get('/',(req,res) => {
    
    res.send('<h1>Hi my name is Martina</h1>')
})


app.get('/Pear',(req,res) => {
    console.log('<h1> My favourite!</h1>')
})

app.get('/personal',(req,res) => {
    res.send({name: "Martina", age:45})
})



app.listen(3000,()=> {
    console.log('listening on port 3000')
    })
