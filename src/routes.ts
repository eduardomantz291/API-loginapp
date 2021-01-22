import { Router, Request, Response } from 'express';

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  return res.send({ mensage: "hello worlds" })
})

export default routes;