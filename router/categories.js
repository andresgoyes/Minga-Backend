import { Router } from "express";
import passport from "../middlewares/passport.js";
import { allCategories, categoryById } from "../controllers/categories/read.js";
import { create } from "../controllers/categories/create.js";
import { updateCategory } from "../controllers/categories/update.js";
import { deleteCategory } from "../controllers/categories/delete.js";
import { validator } from "../middlewares/validator.js";
import schema from "../schemas/category.js";
import categoryExists from "../middlewares/categoryExists.js";
import isAdmin from "../middlewares/isAdmin.js";

const router = Router();

router.get('/all', passport.authenticate('jwt', { session: false }), allCategories);
router.get('/id/:id', passport.authenticate('jwt', { session: false }), categoryById);

router.post('/create', passport.authenticate('jwt', { session: false }), isAdmin, validator(schema), categoryExists, create);

router.put('/update/:id', passport.authenticate('jwt', { session: false }), isAdmin, validator(schema), categoryExists, updateCategory);

router.delete('/delete/:id', passport.authenticate('jwt', { session: false }), isAdmin, deleteCategory);

export default router;