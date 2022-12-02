import { customers, ICustomer } from '../middlewares/account-exists.middleware'
import { randomUUID } from 'crypto'

type AccountBody = {
    cpf: string
    name: string,
    id: string,
    statement: any
}

export const createAccount = async (requestBody: AccountBody) => {

    const { cpf, name } = requestBody

    const customerExists = customers.find((customer) => customer.cpf === cpf)

    if (customerExists) {
        throw new Error();
    }

    const statement: any = []

    customers.push({
        cpf,
        name,
        id: randomUUID(),
        statement
    });
}

export const updateAccount = async (customer: ICustomer, name: string) => {
    customer.name = name
}

export const deleteAccount = async (customer: any) => {
    // splice(o que queremos excluir, até onde vamos excluir)
    customers.splice(customer, 1)
}
