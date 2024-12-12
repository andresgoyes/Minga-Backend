import { Router } from "express";
import adminRouter from './admin.js';
import userRouter from './users.js';
import authorRouter from './authors.js';
import companyRouter from './companies.js';
import categoryRouter from './categories.js';
import mangaRouter from './mangas.js';
import chapterRouter from './chapters.js';
import commentRouter from './comments.js';
import reactionRouter from "./reactions.js";
import authRouter from "./auth.js";
import donateRouter from "./donate.js";

const router = Router();

router.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Minga Group 5 - Backend</title>
        </head>
        <body>
            <h1>Minga Group 5 - Backend</h1>
        </body>
        </html>
    `);
});

router.use('/auth', authRouter);
router.use('/dashboard', adminRouter);
router.use('/users', userRouter);
router.use('/authors', authorRouter);
router.use('/companies', companyRouter);
router.use('/categories', categoryRouter);
router.use('/mangas', mangaRouter);
router.use('/chapters', chapterRouter);
router.use('/comments', commentRouter);
router.use('/reactions', reactionRouter);
router.use('/payment', donateRouter)

export default router;