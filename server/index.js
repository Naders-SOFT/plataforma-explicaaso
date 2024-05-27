import express from 'express'
// import routes from './routes/api.routes.js'
import path from 'path'
import cors from 'cors'
import pdfController from './controllers/pdf.controller.js'
import multer from 'multer'
import { S3Client, GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3'
import multerS3 from 'multer-s3'

const app = express()

app.use(express.static('public'))
app.use(express.json())
// app.use('/api', routes)
// app.use(cors({
//     origin: 'http://localhost:3000'  
// }));

const storage = multer.memoryStorage()
const upload2 = multer({ storage: storage })

const s3 = new S3Client({
    endpoint: 'http://127.0.0.1:9000',
    credentials: {
        accessKeyId: 'gRk1NVbg8v9bcW5IHMny',
        secretAccessKey: '78rRnHaczSvpwCgQYRum0gBTE1bIdKSNLzFemmqk'
    },
    sslEnabled: false, 
    s3ForcePathStyle: true, 
    region: 'us-east-1'
})

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'teste',
        acl: 'public-read',
        key: (request, arquivo, cb) => {
            cb(null, Date.now(), + '-' + arquivo.originalname)
        }
    })
})


app.post('/posts', upload2.single('arq-pdf'), async function(request, response, err) {
    console.log('req file', request.file)
    
    const params = {
        Bucket: 'teste',
        Key: request.file.originalname,
        Body: request.file.buffer,
        ContentType: request.file.mimetype
    }
    const command = new PutObjectCommand(params)
    await s3.send(command)
})


app.listen(3003,  () => {
    console.log('Servidor ouvindo na porta 3003.') 
})