import { Router } from "express";
import { create } from "../controllers/mangas/create.js";
import { allMangas, mangaById, mangaByAuthorId, mangaByCompanyId } from "../controllers/mangas/read.js";
import { updateManga } from "../controllers/mangas/update.js";
import { deleteManga } from "../controllers/mangas/delete.js";
import { validator } from "../middlewares/validator.js";
import passport from "../middlewares/passport.js";
import mangaExists from "../middlewares/mangaExists.js";
import mangaAuth from "../middlewares/mangaAuth.js";
import schema from "../schemas/manga.js";

const router = Router()

router.get('/all/', passport.authenticate('jwt', { session: false }), allMangas);
router.get('/id/:id', passport.authenticate('jwt', { session: false }), mangaById);
router.get('/byAuthor/:id', passport.authenticate('jwt', { session: false }), mangaByAuthorId)
router.get('/byCompany/:id', passport.authenticate('jwt', { session: false }), mangaByCompanyId)

router.post('/create', passport.authenticate('jwt', { session: false }), validator(schema), mangaExists, create)

router.put('/update/:id', passport.authenticate('jwt', { session: false }), validator(schema), mangaExists, mangaAuth, updateManga)

router.delete('/delete/:id', passport.authenticate('jwt', { session: false }), mangaAuth, deleteManga)

export default router