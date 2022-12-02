import { ICustomer } from "../middlewares/account-exists.middleware"
import { getBalance } from "../utils/getBalance"

type IWithdraw = {
    description: string;
    amount: number;
}

export const createWithdraw = async (customer: ICustomer, requestBody: IWithdraw) => {

    const { description, amount } = requestBody

    const balance = getBalance(customer.statement)

    if (balance < amount) {
        throw new Error();
    }

    const statementOperation = {
        description,
        amount,
        created_at: new Date(),
        type: "debit"
    }

    customer.statement.push(statementOperation)
}