import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3'
import multer from 'multer'
import multerS3 from 'multer-s3'

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

const uploadArquivo = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'teste',
        acl: 'public-read',
        key: (request, arquivo, cb) => {
            cb(null, Date.now(), + '-' + arquivo.originalname)
        }
    })
})

export default {s3, uploadArquivo};