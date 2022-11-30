import express, { NextFunction, Request, Response } from 'express'
import { randomUUID } from 'crypto'

const app = express()
app.use(express.json())

// Middleware
const verifyIfExistsAccountCPF = (request: Request, response: Response, next: NextFunction) => {
    const { cpf } = request.headers

    const customer = customers.find((customer) => customer.cpf === cpf)

    if (!customer) {
        return response.status(400).json({ error: "Customer not found" })
    }

    request.customer = customer

    return next()
}

// Function to get the balance of withdraw - amount
const getBalance = (statement: any) => {
    const balance = statement.reduce((acc: number, operation: any) => {
        if (operation.type === 'credit') {
            return acc + operation.amount
        } else {
            return acc - operation.amount
        }
    }, 0)

    return balance
}

type ICustomer = {
    name: string
    cpf: string
    id: string
    statement: IStatement
}

type IStatement = {
    description: string,
    amount: number,
    created_at: Date,
    type: string
}

const customers: ICustomer[] = []

app.get("/", (request, response) => {
    return response.json({ msg: "Welcome to FinAPI CRUD" })
})

app.post("/account", (request, response) => {
    const { cpf, name } = request.body

    const customerExists = customers.find((customer) => customer.cpf === cpf)

    if (customerExists) {
        return response.status(400).json({ error: "Customer already exists" })
    }

    const statement: any = []

    customers.push({
        cpf,
        name,
        id: randomUUID(),
        statement
    })

    return response.status(201).send()
})

app.get("/account", verifyIfExistsAccountCPF, (request, response) => {
    const { customer } = request

    return response.json(customer)
})

app.put("/account", verifyIfExistsAccountCPF, (request, response) => {
    const { name } = request.body
    const { customer } = request

    customer.name = name

    return response.status(201).send()
})

app.delete("/account", verifyIfExistsAccountCPF, (request, response) => {
    const { customer } = request

    // splice(o que queremos excluir, até onde vamos excluir)
    customers.splice(customer, 1)

    return response.status(204).json()
})

app.get("/statement", verifyIfExistsAccountCPF, (request, response) => {
    const { customer } = request

    return response.json(customer.statement)
})

app.post("/deposit", verifyIfExistsAccountCPF, (request, response) => {
    const { description, amount } = request.body
    const { customer } = request

    const statementOperation = {
        description,
        amount,
        created_at: new Date(),
        type: "credit"
    }

    customer.statement.push(statementOperation)

    return response.status(201).json()
})

app.post("/withdraw", verifyIfExistsAccountCPF, (request, response) => {
    const { amount } = request.body
    const { customer } = request

    const balance = getBalance(customer.statement)

    if (balance < amount) {
        return response.status(400).json({ error: "Insufficient funds!" })
    }

    const statementOperation = {
        amount,
        created_at: new Date(),
        type: "debit"
    }

    customer.statement.push(statementOperation)

    return response.status(201).json()
})

app.get("/statement/date", verifyIfExistsAccountCPF, (request, response) => {
    const { customer } = request
    const { date } = request.query

    const dateFormat = new Date(date + " 00:00")

    // ano-mes-dia -> 2022-11-30
    const statement = customer.statement.filter((statement: any) => statement.created_at.toDateString() === new Date(dateFormat).toDateString())

    return response.json(statement)
})

app.get("/balance", verifyIfExistsAccountCPF, (request, response) => {
    const { customer } = request

    const balance = getBalance(customer.statement)

    return response.json({ total: balance })
})

app.listen(3000, () => console.log("Server is running on port 3000"))