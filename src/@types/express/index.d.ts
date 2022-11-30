export { }

declare global {
    namespace Express {
        interface Request {
            customer?: any
        }
    }
}