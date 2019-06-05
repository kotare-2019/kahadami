const express = require('express')
const puppiesRoutes = express.Router()
const data = require('./data')
const fs = require('fs')
const newData = require('./newData')


const viewData = {
    data: data
}



puppiesRoutes.get('/', (req, res) => {
    res.render('./puppies/index', data);  
})

puppiesRoutes.get('/:id', (req, res) => {
    let puppyProfile = data.puppies.find(item =>{
        return req.params.id == item.id
    })
    res.render('./puppies/view', puppyProfile)
})

puppiesRoutes.get('/edit/:id', (req, res) => {
    let puppyProfile = data.puppies.find(item =>{
        return req.params.id == item.id
    })
    res.render('./puppies/edit', puppyProfile) 
})



puppiesRoutes.post('/edit/:id', (req, res)=>{

    req.body.id = req.params.id
    for (var i = 0; i< data.puppies.length; i++){
        if(data.puppies[i].id == req.params.id){
            data.puppies[i] = req.body 
        }
    }
    fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', (err)=>{ 
        res.redirect('/')
        })
})





module.exports = {
    puppiesRoutes
}

