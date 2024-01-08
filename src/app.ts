import express, { Request, Response } from 'express';

const app = express();
const PORT: number = parseInt(process.env.PORT as string, 10) || 4000;

app.get('/', (req: Request, res: Response) => {
    res.status(200).send("Hello World!! j'aime les galettes ");
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
