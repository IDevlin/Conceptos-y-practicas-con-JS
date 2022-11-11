import express from "express";
import multer from "multer";
const upload = multer({dest: 'images/' })

const app = express()

app.post('/img',upload.single('image'),(req, res)=> {
  console.log(req.image)
  res.send('recibido').status(200)
})

app.listen(3001, ()=> {
    console.log( 'app en el puerto 3001')
})