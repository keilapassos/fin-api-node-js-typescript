import { NextFunction, Request, Response } from 'express'

export type IStatement = {
    description: string,
    amount: number,
    created_at: Date,
    type: string
}

export type ICustomer = {
    name: string
    cpf: string
    id: string
    statement: IStatement[]
}

export const customers: ICustomer[] = []

export const verifyIfExistsAccountCPF = (request: Request, response: Response, next: NextFunction) => {
    const { cpf } = request.headers

    const customer = customers.find((customer) => customer.cpf === cpf)

    if (!customer) {
        return response.status(400).json({ error: "Customer not found" })
    }

    request.customer = customer

    return next()
}