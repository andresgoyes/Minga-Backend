import { Router } from "express";
import { create } from "../controllers/comments/create.js";
import { allComments, commentByChapterId, commentById } from "../controllers/comments/read.js";
import { updateComment } from "../controllers/comments/update.js";
import { deleteComment } from "../controllers/comments/delete.js";
import { validator } from "../middlewares/validator.js";
import passport from "../middlewares/passport.js";
import commentAuth from "../middlewares/commentAuth.js";
import isSpam from "../middlewares/isSpam.js";
import schema from "../schemas/comment.js";


const router = Router();

router.get('/all', passport.authenticate('jwt', { session: false }), allComments);
router.get('/byChapter/:id', passport.authenticate('jwt', { session: false }), commentByChapterId);
router.get('/id/:id', passport.authenticate('jwt', { session: false }), commentById);

router.post('/create', passport.authenticate('jwt', { session: false }), validator(schema), isSpam, create);

router.put('/update/:id', passport.authenticate('jwt', { session: false }), validator(schema), commentAuth, updateComment);

router.delete('/delete/:id', passport.authenticate('jwt', { session: false }), commentAuth, deleteComment);

export default router;