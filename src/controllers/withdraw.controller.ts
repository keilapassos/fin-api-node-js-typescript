import { Request, Response, NextFunction } from "express";
import { createWithdraw } from "../services/withdraw.service"

export const create = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const { customer } = request
        await createWithdraw(customer, request.body)
        return response.status(201).json();
    } catch (err) {
        return response.status(400).json({ error: "Insufficient funds!" })
    }
}