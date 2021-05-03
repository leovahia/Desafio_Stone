import cors from 'cors'
import path from 'path'
import express from 'express'
const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use(cors())
 
app.listen(PORT, () => console.log("Servidor rodando"))