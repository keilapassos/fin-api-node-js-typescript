import { Router } from "express";
import { create, deleteAc, list, update } from "../controllers/account.controller";
import { verifyIfExistsAccountCPF } from "../middlewares/account-exists.middleware";


const router = Router();

export const accountRouter = () => {
    router.post('/', create)
    router.get('/', verifyIfExistsAccountCPF, list)
    router.put('/', verifyIfExistsAccountCPF, update)
    router.delete('/', verifyIfExistsAccountCPF, deleteAc)

    return router;
}

