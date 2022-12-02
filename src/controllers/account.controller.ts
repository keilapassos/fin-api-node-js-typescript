import { Request, Response, NextFunction } from "express";
import { createAccount, updateAccount, deleteAccount } from "../services/account.service"

export const create = async (request: Request, response: Response, next: NextFunction) => {
    try {
        await createAccount(request.body);
        return response.status(201).json();
    } catch (err) {
        return response.status(400).json({ error: "Customer already exists" })
    }
}

export const list = async (request: Request, response: Response) => {

    const { customer } = request
    return response.json(customer)
}

export const update = async (request: Request, response: Response) => {

    const { customer } = request
    const { name } = request.body

    await updateAccount(customer, name);
    return response.status(201).json();
}

export const deleteAc = async (request: Request, response: Response) => {

    const { customer } = request

    await deleteAccount(customer);
    return response.status(204).json();
}
