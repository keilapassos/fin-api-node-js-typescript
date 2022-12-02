import { Router } from "express";
import { create } from "../controllers/withdraw.controller";
import { verifyIfExistsAccountCPF } from "../middlewares/account-exists.middleware";

const router = Router();

export const withdrawRouter = () => {
    router.post('/', verifyIfExistsAccountCPF, create)

    return router;
}

