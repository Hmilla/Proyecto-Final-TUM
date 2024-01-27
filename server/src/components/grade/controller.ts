import type { Request, Response } from "express";
import { list, getOne, remove } from "../../utils";
import prisma from "../../db";

export async function listGrades(req: Request, res: Response): Promise<Response> {
  return list(req, res, prisma.grade, "grades")
}

export async function getOneGrade(req: Request, res: Response): Promise<Response> {
  return getOne(req, res, prisma.grade)
}

export async function storeGrade(req: Request, res: Response): Promise<Response> {
  try {
    const { description, clase,   teacher_id, course, student_grades, min_grade, max_grade, promedio } = req.body;

    const grade = await prisma.grade.create({
      data: {
        description,
        clase, 
        teacher_id,
        course,
        student_grades,
        min_grade,
        max_grade,
        promedio
      },
    });

    

    return res.status(201).json(grade);
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error,
    });
  }
}


export async function updateGrade(req: Request, res: Response): Promise<Response> {
  try {
    const gradeId = req.params.id; 
    const { description, clase,   teacher_id, course, student_grades, min_grade, max_grade, promedio } = req.body;

    const updatedGrade = await prisma.grade.update({
      where: {
        id: gradeId,
      },
      data:{
        description,
        clase, 
        teacher_id,
        course,
        student_grades,
        min_grade,
        max_grade,
        promedio
      },
    });

    return res.status(200).json(updatedGrade);
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error,
    });
  }
}


export async function removeGrade(req: Request, res: Response): Promise<Response> {
  return remove(req, res, prisma.grade)
}
