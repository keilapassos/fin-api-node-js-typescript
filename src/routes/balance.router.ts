import { Router } from "express";
import { list } from "../controllers/balance.controller";
import { verifyIfExistsAccountCPF } from "../middlewares/account-exists.middleware";


const router = Router();

export const balanceRouter = () => {
    router.get('/', verifyIfExistsAccountCPF, list)

    return router;
}
