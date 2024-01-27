import { Router } from "express";
import * as Controller from "./controller"

const studentRouter = Router()
 
studentRouter.route("/").get(Controller.listStudent)
studentRouter.route("/").post(Controller.storeStudent)
studentRouter.route("/:id").put(Controller.updateStudent)
studentRouter.route("/:id").delete(Controller.removeStudent)
studentRouter.route("/:id").get(Controller.getOneStudent)

export default studentRouter