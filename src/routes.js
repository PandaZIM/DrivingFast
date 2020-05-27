import { Router } from "express";
import User from './app/models/Users'

const routes = new Router()

routes.get('/', (req, res) =>{
    return res.json({ message: 'hi'})
})

export default routes