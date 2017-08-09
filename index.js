//import express from 'express'
//import path from 'path'

const express=require('express')
const path=require('path')
const app=express();


app.use(express.static(__dirname+'/dist'))

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname+'/index.html'))
})
app.listen('8000',()=>{
  console.info('react dropdown on port 8000')
})
