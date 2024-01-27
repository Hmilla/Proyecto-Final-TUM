import type { Request, Response } from "express";
import { list, getOne, remove } from "../../utils";
import prisma from "../../db";

export async function listAdmin(req: Request, res: Response): Promise<Response> {
  return list(req, res, prisma.admin, "admins")
}

export async function getOneAdmin(req: Request, res: Response): Promise<Response> {
  return getOne(req, res, prisma.admin)
}

export async function storeAdmin(req: Request, res: Response): Promise<Response> {
  try {
    const { name, email, password } = req.body;

    const admin = await prisma.admin.create({
      data: {
        name,
        email,
        password,
      },
    });

    return res.status(201).json(admin);
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error,
    });
  }
}

export async function updateAdmin(req: Request, res: Response): Promise<Response> {
  try {
    const adminId = req.params.id; 
    const { name, email, password } = req.body;

    const updatedAdmin = await prisma.admin.update({
      where: {
        id: adminId,
      },
      data: {
        name,
        email,
        password,
      },
    });

    return res.status(200).json(updatedAdmin);
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error,
    });
  }
}


export async function removeAdmin(req: Request, res: Response): Promise<Response> {
  return remove(req, res, prisma.admin)
}
