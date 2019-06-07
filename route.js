const express = require('express')
const treeRoutes = express.Router()
const data = require('./data')
const fs = require('fs')


const viewData = {
    data: data
}



treeRoutes.get('/', (req, res) => {
    res.render('./partials/index', data);  
})

treeRoutes.get('/view/:id', (req, res) => {
    let treeProfile = data.trees.find(item =>{
        return req.params.id == item.id
    })
    res.render('./partials/view', treeProfile)
})



treeRoutes.get('/edit/:id', (req, res) => {
   
    let treeProfile = data.trees.find(item =>{
        return req.params.id == item.id
    })
    res.render('./partials/edit', treeProfile) 

})

treeRoutes.post('/view/:id', (req, res)=>{
    console.log('here');
    
    req.body.id = req.params.id
    for (var i = 0; i< data.trees.length; i++){
        if(data.trees[i].id == req.params.id){
            data.trees[i] = req.body 
        }
    }
    fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', (err)=>{ 
        res.redirect('/')
        })
})

treeRoutes.get('/add', (req, res) => {
    let treeProfile = data.trees.find(item =>{
        return req.params.id == item.id
    })
    res.render('./partials/add') 
})


treeRoutes.post('/add', (req, res) => {
    // data.trees.push(treeProfile)
    const newTree = {
        id: data.trees.length + 1,
        name: req.body.name,
        origin: req.body.origin,
        owner: req.body.owner,
        story: req.body.story
    }
    console.log(newTree.id);

 
    data.trees.push(newTree)

    fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', (err)=>{ 
        res.redirect('/')
    }) 

    // length + 1
})


module.exports = {
    treeRoutes
}

