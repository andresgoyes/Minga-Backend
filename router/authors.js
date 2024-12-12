import { Router } from "express";
import { allAuthors, authorById, authorByUserId } from "../controllers/authors/read.js";
import { create } from "../controllers/authors/create.js";
import { updateAuthor } from "../controllers/authors/update.js";
import { deleteAuthor } from "../controllers/authors/delete.js";
import { validator } from "../middlewares/validator.js";
import passport from "../middlewares/passport.js";
import isAuthorAuthorized from "../middlewares/isAuthorAuthorized.js";
import nameExists from "../middlewares/nameExists.js";
import schema from "../schemas/author.js";

const router = Router()

router.get('/all', passport.authenticate('jwt', { session: false }), allAuthors)
router.get('/id/:id', passport.authenticate('jwt', { session: false }), isAuthorAuthorized, authorById)
router.get('/byUser/:id', passport.authenticate('jwt', { session: false }), authorByUserId)

router.post('/create', passport.authenticate('jwt', { session: false }), validator(schema), nameExists, create)

router.put('/update/:id', passport.authenticate('jwt', { session: false }), isAuthorAuthorized, validator(schema), nameExists, updateAuthor)

router.delete('/delete/:id', passport.authenticate('jwt', { session: false }), isAuthorAuthorized, deleteAuthor)

export default router