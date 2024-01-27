import type { Request, Response } from "express";


export async function list(req: Request, res: Response, prismaElement : any, collection: String ): Promise<Response> {
  try {
    const elements = await prismaElement.findMany();
    const totalElements = await prismaElement.count(); 

    res.header('Content-Range', `${collection} 0-${elements.length - 1}/${totalElements}`);
    return res.json(elements);

  } catch (error) {
    return res.status(500).json({
      ok: false,
      error,
    });
  }
}

export async function getOne(req: Request, res: Response, prismaElement : any): Promise<Response> {
  try {
    const Id = req.params.id;
    console.log(Id)
    const element = await prismaElement.findUnique({
      where: { id: Id },
    });

    if (!element) {
      return res.status(404).json({
        ok: false,
        error: "Element not found",
      });
    }

    return res.json(element);
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error,
    });
  }
}


export async function remove(req: Request, res: Response, prismaElement: any): Promise<Response> {
  try {
    const Id = req.params.id;
    await prismaElement.delete({
      where: { id: Id },
    });
    return res.json({
      ok: true,
      message: "Element deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error,
    });
  }
}
