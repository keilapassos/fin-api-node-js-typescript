import { ICustomer } from "../middlewares/account-exists.middleware"

export const getStatementByDate = async (customer: ICustomer, date: any) => {
    const dateFormat = new Date(date + " 00:00")

    // ano-mes-dia -> 2022-11-30
    const statement = customer.statement.filter((statement: any) => statement.created_at.toDateString() === new Date(dateFormat).toDateString())
    return statement
}
