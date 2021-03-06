import express, { Request, Response, NextFunction } from "express"

const app = express()

interface data {
    name: string
}

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World")
})

app.listen(3000, () => {
    console.log("Server started at port....", 3000)
})