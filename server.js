const express = require('express');
const app = express();

app.set("view engine", 'ejs')
app.use(express.urlencoded({extended: true}))


app.get('/', (reg, res) => {
    console.log("here");
    res.render('index', {text: "world"})
})

const userRouter = require('./routes/users')

app.use('/users', userRouter)

app.listen(3000)

