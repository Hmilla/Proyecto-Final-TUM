import type { Request, Response } from "express";
import { list, getOne, remove } from "../../utils";
import prisma from "../../db";

export async function listStudent(req: Request, res: Response): Promise<Response> {
  return list(req, res, prisma.student, "students")
}

export async function getOneStudent(req: Request, res: Response): Promise<Response> {
  return getOne(req, res, prisma.student)
}

export async function storeStudent(req: Request, res: Response): Promise<Response> {
  try {
    const { name, email, password, clase } = req.body;

    const student = await prisma.student.create({
      data: {
        name,
        email,
        password,
        clase
      },
    });
    
    return res.status(201).json(student);
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error,
    });
  }
}

export async function updateStudent(req: Request, res: Response): Promise<Response> {
  try {
    const studentId = req.params.id; 
    const { name, email, clase , password } = req.body;

    const updatedStudent = await prisma.student.update({
      where: {
        id: studentId,
      },
      data: {
        name,
        email,
        password,
        clase,
      },
    });

    return res.status(200).json(updatedStudent);
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error,
    });
  }
}


export async function removeStudent(req: Request, res: Response): Promise<Response> {
  return remove(req, res, prisma.student)
}
