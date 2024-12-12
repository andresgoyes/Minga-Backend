import { Router } from "express";
import passport from "../middlewares/passport.js";
import isAdmin from "../middlewares/isAdmin.js";
import { allAuthors } from "../controllers/admin/readAuthors.js";
import { allCompanies } from "../controllers/admin/readCompanies.js";
import toggleAuthor from "../controllers/admin/toggleAuthor.js"
import toggleCompany from "../controllers/admin/toggleCompany.js";

const routerAdmin = Router();

routerAdmin.get('/authors', passport.authenticate('jwt', { session: false }), isAdmin, allAuthors);
routerAdmin.put('/authors/toggle', passport.authenticate('jwt', { session: false }), isAdmin, toggleAuthor);

routerAdmin.get('/companies', passport.authenticate('jwt', { session: false }), isAdmin, allCompanies);
routerAdmin.put('/companies/toggle', passport.authenticate('jwt', { session: false }), isAdmin, toggleCompany);

export default routerAdmin;