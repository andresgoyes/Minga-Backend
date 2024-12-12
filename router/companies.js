import { Router } from "express";
import { allCompanies, companyById } from "../controllers/companies/read.js";
import { create, createMany } from "../controllers/companies/create.js";
import { updateCompany } from "../controllers/companies/update.js";
import { deleteCompany } from "../controllers/companies/delete.js";
import { validator } from "../middlewares/validator.js";
import passport from "../middlewares/passport.js";
import isCompanyAuthorized from "../middlewares/isCompanyAuthorized.js";
import companyExists from "../middlewares/companyExists.js";
import schema from "../schemas/company.js";

const router = Router();

router.get('/all', passport.authenticate('jwt', { session: false }), allCompanies);
router.get('/id/:id', passport.authenticate('jwt', { session: false }), isCompanyAuthorized, companyById);

router.post('/create', passport.authenticate('jwt', { session: false }), validator(schema), companyExists, create);

router.put('/update/:id', passport.authenticate('jwt', { session: false }), isCompanyAuthorized, validator(schema), companyExists, updateCompany);

router.delete('/delete/:id', passport.authenticate('jwt', { session: false }), isCompanyAuthorized, deleteCompany);

export default router;