import { Router } from "express";
import contactCreateController from "../controllers/contacts/createContact.controller";

import userCreateController from "../controllers/user/createUser.controller";
import userDeleteController from "../controllers/user/deleteUser.controller";
import userLoginController from "../controllers/user/loginUser.controller";
import userProfileController from "../controllers/user/userProfile.controller";
import userUpdateController from "../controllers/user/userUpdate.controller";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import cors from "cors"
import listContactController from "../controllers/contacts/listContact.cotroller";
import updateContactController from "../controllers/contacts/updateContact.controller";
import deleteContactController from "../controllers/contacts/deleteContact.controller";


const routes = Router()

routes.post("/users",cors(),  userCreateController)
routes.post("/login",cors(), userLoginController);
routes.post("/contact",cors(),  verifyAuthTokenMiddleware, contactCreateController)
routes.get("/contact",cors(),  verifyAuthTokenMiddleware, listContactController)
routes.patch("/contact/:id",cors(),  verifyAuthTokenMiddleware, updateContactController)
routes.delete("/contact/:id",cors(),  verifyAuthTokenMiddleware, deleteContactController)
routes.get("/users",cors(),  verifyAuthTokenMiddleware, userProfileController)
routes.patch("/users/",cors(),  verifyAuthTokenMiddleware, userUpdateController)
routes.delete("/users/",cors(),  verifyAuthTokenMiddleware, userDeleteController)

export default routes