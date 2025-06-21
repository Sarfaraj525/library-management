import express, { Application, Request, Response } from 'express'
import { booksRoutes } from './app/controllers/books.controller';


const app: Application = express()

app.use(express.json()) 


app.use("/api", booksRoutes);





app.get('/', (req : Request, res: Response) => {
    console.log({req, res});
  res.send('Hello Welcome to Library Management System!')
})


export default app;