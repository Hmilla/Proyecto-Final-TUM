import { Router } from "express";
import * as Controller from "./controller"

const teacherRouter = Router()
 
teacherRouter.route("/").get(Controller.listTeachers)
teacherRouter.route("/").post(Controller.storeTeacher)
teacherRouter.route("/:id").put(Controller.updateTeacher)
teacherRouter.route("/:id").delete(Controller.removeTeacher)
teacherRouter.route("/:id").get(Controller.getOneTeacher)

export default teacherRouter