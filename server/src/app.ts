import express from "express";
import { adminRouter, studentRouter, teacherRouter, gradeRouter } from "./components";

import cors from "cors"



const app = express()

const corsOptions = {
    exposedHeaders: 'Content-Range'
};

app.use(express.json())
app.use(cors(corsOptions))


app.use("/admins", adminRouter)
app.use("/students", studentRouter)
app.use("/teachers", teacherRouter)
app.use("/grades", gradeRouter)

export default app