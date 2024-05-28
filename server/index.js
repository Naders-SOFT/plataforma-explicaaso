import express from 'express'
import multer from 'multer'
import cors from 'cors'
// import { S3Client, GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3'
import postRoutes from './routes/api.routes.js'

const app = express()

app.use(express.static('public'))
app.use(express.json()); 
app.use(cors());
app.use('/api/posts', postRoutes); 

app.listen(3003,  () => {
    console.log('Servidor ouvindo na porta 3003.') 
});