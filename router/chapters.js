import { Router } from "express";
import { create } from "../controllers/chapters/create.js";
import { allChapters, chapterByMangaId, chapterById } from "../controllers/chapters/read.js";
import { updateChapter } from "../controllers/chapters/update.js";
import { deleteChapter } from "../controllers/chapters/delete.js";
import { validator } from "../middlewares/validator.js";
import passport from "../middlewares/passport.js";
import chapterAuth from "../middlewares/chapterAuth.js";
import schema from "../schemas/chapter.js";

const router = Router()

router.get('/all', passport.authenticate('jwt', { session: false }), allChapters)
router.get('/byManga/:id', passport.authenticate('jwt', { session: false }), chapterByMangaId)
router.get('/id/:id', passport.authenticate('jwt', { session: false }), chapterById)

router.post('/create', passport.authenticate('jwt', { session: false }), validator(schema), create)

router.put('/update/:id', passport.authenticate('jwt', { session: false }), validator(schema), chapterAuth, updateChapter)

router.delete('/delete/:id', passport.authenticate('jwt', { session: false }), chapterAuth, deleteChapter)

export default router