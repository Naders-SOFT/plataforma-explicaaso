import express from 'express';
import cors from 'cors';
import pdfRoutes from './routes/pdf.routes.js';
import userRoutes from './routes/user.routes.js';
import blogRoutes from './routes/blog.routes.js';
import materiaRoutes from './routes/materia.routes.js'
import db from './config/dbConnect.js';
import dotenv from 'dotenv';

dotenv.config();

// BANCO DE DADOS:
async function conectaDB() {
    // Cria uma conexão da DataBase:
    const conexao = await db();

    // Capta se há erro na conexão:
    conexao.on("error", (erro) => {
        console.error("Erro de conexão", erro);
    });

    // Capta conexão com êxito:
    conexao.once("open", () => {
        console.log("Conexão com o banco feita com sucesso");
    });
}


// APLICAÇÃO:
conectaDB();

const app = express();

app.use(express.static('public'));
app.use(express.json()); 
app.use(cors());

// Rotas:
app.use('/pdf', pdfRoutes); 
app.use('/user', userRoutes);
app.use('/blog', blogRoutes);
app.use('/materias', materiaRoutes);


app.listen(3003,  () => {
    console.log('Servidor ouvindo na porta 3003.');
});