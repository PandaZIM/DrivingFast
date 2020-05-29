import { Router } from "express";
import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController"
import RecipientController from "./app/controllers/RecipientController";
import verificationAdmin from "./app/middlewares/verificationAdmin";

const routes = new Router()

routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)

routes.post('recipients', RecipientController.store)

routes.use(verificationAdmin)

routes.put('recipients', RecipientController.store)

export default routes