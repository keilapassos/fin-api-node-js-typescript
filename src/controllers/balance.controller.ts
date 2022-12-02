import { Request, Response } from "express";
import { getBalance } from "../utils/getBalance"

export const list = async (request: Request, response: Response) => {

    const { customer } = request

    const balance = getBalance(customer.statement)

    return response.json({ total: balance })
}