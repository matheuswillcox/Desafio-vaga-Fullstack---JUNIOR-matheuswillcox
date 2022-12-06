import { Request, Response } from "express";
import userDeleteService from "../../services/user/userDelete.service";

const userDeleteController = async (req: Request, res: Response) => {
  try {
    const  id  = req.userId;

    await userDeleteService({ id });

    return res.status(200).send({ message: "Usuário Apagado" });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(404).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userDeleteController;
