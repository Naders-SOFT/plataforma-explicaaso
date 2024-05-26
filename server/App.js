import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3'
import express from 'express'
import multer from 'multer'
import multerS3 from 'multer-s3'
import routes from './routes/api.routes.js'

const app = express()

app.use(express.static('public'))
app.use(routes)
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.listen(3003,  () => {
    console.log('Servidor ouvindo na porta 3003.') 
})