import type { Request, Response } from "express";
import { list, getOne, remove } from "../../utils";
import prisma from "../../db";

export async function listTeachers(req: Request, res: Response): Promise<Response> {
  return list(req, res, prisma.teacher, "teachers")
}

export async function getOneTeacher(req: Request, res: Response): Promise<Response> {
  return getOne(req, res, prisma.teacher)
}

export async function storeTeacher(req: Request, res: Response): Promise<Response> {
  try {
    const { name, email, courses, password } = req.body;

    const teacher = await prisma.teacher.create({
      data: {
        name,
        email,
        courses,
        password,
      },
    });

    return res.status(201).json(teacher);
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error,
    });
  }
}


export async function updateTeacher(req: Request, res: Response): Promise<Response> {
  try {
    const teacherId = req.params.id; 
    const { name, email, courses, password } = req.body;

    const updatedTeacher = await prisma.teacher.update({
      where: {
        id: teacherId,
      },
      data: {
        name,
        email,
        courses,
        password,
      },
    });

    return res.status(200).json(updatedTeacher);
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error,
    });
  }
}


export async function removeTeacher(req: Request, res: Response): Promise<Response> {
  return remove(req, res, prisma.teacher)
}
