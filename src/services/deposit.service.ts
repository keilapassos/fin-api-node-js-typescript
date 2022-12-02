import { ICustomer } from "../middlewares/account-exists.middleware"

type IDeposit = {
    description: string;
    amount: number;
}

export const createDeposit = async (customer: ICustomer, requestBody: IDeposit) => {

    const { description, amount } = requestBody

    const statementOperation = {
        description,
        amount,
        created_at: new Date(),
        type: "credit"
    }

    customer.statement.push(statementOperation)
}