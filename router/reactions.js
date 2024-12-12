import { Router } from "express";
import { validator } from "../middlewares/validator.js";
import passport from "../middlewares/passport.js";
import schema from "../schemas/reaction.js";
import { like } from "../controllers/reactions/like.js"; 
import { getUserFavorites } from "../controllers/reactions/read.js";

const router = Router();

router.get('/favorites', passport.authenticate('jwt', { session: false }), getUserFavorites);

router.post('/react/:mangaId', passport.authenticate('jwt', { session: false }), validator(schema), like);

export default router;