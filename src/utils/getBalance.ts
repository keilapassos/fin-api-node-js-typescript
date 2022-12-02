// Function que realiza operações de depósito ou saque
export const getBalance = (statement: any) => {
    const balance = statement.reduce((acc: number, operation: any) => {
        if (operation.type === 'credit') {
            return acc + operation.amount
        } else {
            return acc - operation.amount
        }
    }, 0)

    return balance
}
