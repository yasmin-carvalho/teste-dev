import 'reflect-metadata';
import express from 'express';
import './database/connect';
import routes from './routes';
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333, () => console.log('Server started at http://localhost:3333'));