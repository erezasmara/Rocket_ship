const express = require('express')
const path = require('path')
const hbs = require('hbs')


const app = express()
const port = process.env.PORT || 3000

//path to view & public directories
const viewPath = path.join(__dirname,'../templates/views')
const publicPath = path.join(__dirname,'../public')


//define view hbs engine
app.set('view engine', 'hbs')
app.set('views',viewPath)

//express serve absolute path to public directory
app.use('/public',express.static(publicPath));

//routes
app.get('',(req,res)=>{

    res.render('index',{})

})

app.get('*',(req,res) =>{
    res.render('404',{
        title:'404',
        message:'הדף המבוקש אינו קיים'
    })
})

//server start to listen 
app.listen(port, ()=>{
    console.log('Server is up on port ' + port)
})
