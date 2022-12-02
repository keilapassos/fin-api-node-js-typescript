import { Express } from "express";
import { accountRouter } from "./account.router";
import { statementRouter } from "./statement.router";
import { balanceRouter } from "./balance.router"
import { depositRouter } from "./deposit.router"
import { withdrawRouter } from "./withdraw.router"

export const routerApp = (app: Express) => {
    app.use("/account", accountRouter())
    app.use("/statement", statementRouter())
    app.use("/balance", balanceRouter())
    app.use("/deposit", depositRouter())
    app.use("/withdraw", withdrawRouter())
}
