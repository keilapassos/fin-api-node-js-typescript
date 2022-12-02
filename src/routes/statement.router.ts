import { Router } from "express";
import { list, listByDate } from "../controllers/statement.controller";
import { verifyIfExistsAccountCPF } from "../middlewares/account-exists.middleware";

const router = Router();

export const statementRouter = () => {
    router.get('/', verifyIfExistsAccountCPF, list)
    router.get('/date', verifyIfExistsAccountCPF, listByDate)

    return router;
}

