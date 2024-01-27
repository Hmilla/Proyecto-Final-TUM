import { Router } from "express";
import * as Controller from "./controller"

const adminRouter = Router()
 
adminRouter.route("/").get(Controller.listAdmin)
adminRouter.route("/").post(Controller.storeAdmin)
adminRouter.route("/:id").put(Controller.updateAdmin)
adminRouter.route("/:id").delete(Controller.removeAdmin)
adminRouter.route("/:id").get(Controller.getOneAdmin)

export default adminRouter