import { Request, Response } from "express";
import { getStatementByDate } from "../services/statement.service";

export const list = async (request: Request, response: Response) => {
    const { customer } = request
    return response.json(customer.statement)
}

export const listByDate = async (request: Request, response: Response) => {
    const { customer } = request
    const { date } = request.query

    const statementByDate = await getStatementByDate(customer, date)
    return response.json(statementByDate)
}