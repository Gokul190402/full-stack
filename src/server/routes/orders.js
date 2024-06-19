const express = require('express')
const router = express.Router()
const order = require('../models/order')

router.post('/new', async (req,res)=>{
    const {username , model ,color , seats , type } = req.body
    console.log('recieved data : ',req.body)

    try{
        const newOrder = order({username,model,color,seats,type})
        await newOrder.save()
        res.status(201).send('order created successfully')
    }
    catch(err){
        res.status(400).send(err.message)
    }
})

router.get('/getlist/:username1',async (req,res)=> {
    const username = req.params.username1
    console.log('recieved data :',req.params)

    try{
        const olist = await order.find({username})
        console.log("Order list:", JSON.stringify(olist, null, 2))
        res.status(200).send(olist)
    }
    catch(err){
        console.error(err.message)
        res.status(400).send(err.message)
    }
})

module.exports = router