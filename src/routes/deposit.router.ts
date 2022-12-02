import { Router } from "express";
import { create } from "../controllers/deposit.controller";
import { verifyIfExistsAccountCPF } from "../middlewares/account-exists.middleware";


const router = Router();

export const depositRouter = () => {
    router.post('/', verifyIfExistsAccountCPF, create)

    return router;
}

