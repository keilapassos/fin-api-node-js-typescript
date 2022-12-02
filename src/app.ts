import express from 'express';
import { routerApp } from "./routes"

const app = express();

app.use(express.json());

routerApp(app)

export default app;
