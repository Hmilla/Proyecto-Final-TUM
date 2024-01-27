import { Router } from "express";
import * as Controller from "./controller"

const gradeRouter = Router()
 
gradeRouter.route("/").get(Controller.listGrades)
gradeRouter.route("/").post(Controller.storeGrade)
gradeRouter.route("/:id").put(Controller.updateGrade)
gradeRouter.route("/:id").delete(Controller.removeGrade)
gradeRouter.route("/:id").get(Controller.getOneGrade)

export default gradeRouter