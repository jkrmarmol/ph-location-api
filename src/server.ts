import express, { Request, Response, NextFunction } from 'express';
import mainRouters from './routers/mainRouters';
import type { CustomErrorHandling } from './typings/interfaces';


const app = express();
const PORT = 9273;
app.use('/', mainRouters)

app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error('endpoint not found') as CustomErrorHandling;
  error.status = 404;
  next(error);
})

app.use((err: CustomErrorHandling, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;
  res.status(status).json({ error: err.message })
})

app.listen(PORT, () => {
  console.log(`Server is now listening on port ${PORT}`)
})