import { Router } from 'express';

const routes = Router();

routes.get("/", (req, res) => {
  return res.send({ mensage: "hello worlds" })
})

export default routes;