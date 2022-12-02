import { Request, Response, NextFunction } from "express";
import { createDeposit } from "../services/deposit.service"

export const create = async (request: Request, response: Response, next: NextFunction) => {

    const { customer } = request
    await createDeposit(customer, request.body)

    return response.status(201).json();
}