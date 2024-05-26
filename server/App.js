import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3'
import express from 'express'
import multerS3 from 'multer-s3'
import routes from './routes/api.routes.js'
import path from 'path'

const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use('/api', routes)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(3003,  () => {
    console.log('Servidor ouvindo na porta 3003.') 
})