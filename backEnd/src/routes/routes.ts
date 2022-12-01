import { Router } from "express";
import contactCreateController from "../controllers/contacts/createContact.controller";

import userCreateController from "../controllers/user/createUser.controller";
import userDeleteController from "../controllers/user/deleteUser.controller";
import userListController from "../controllers/user/listUser.cotroller";
import userLoginController from "../controllers/user/loginUser.controller";
import userProfileController from "../controllers/user/userProfile.controller";
import userUpdateController from "../controllers/user/userUpdate.controller";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";

const routes = Router()

routes.post("/users", userCreateController)
routes.post("/login", userLoginController);
routes.post("/contact", verifyAuthTokenMiddleware, contactCreateController)
routes.get("/users", userListController)
routes.get("/users/:id", userProfileController)
routes.patch("/users/:id", userUpdateController)
routes.delete("/users/:id", userDeleteController)

export default routes