const express = require('express')
const puppiesRoutes = express.Router()
const data = require('./data')
const fs = require('fs')


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
        fs.writeFile('newData.json', JSON.stringify(req.body), 'utf8', (err)=>{
            
        })
})





module.exports = {
    puppiesRoutes
}

