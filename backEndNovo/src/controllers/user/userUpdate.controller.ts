import { Request, Response } from "express";
import userUpdateService from "../../services/user/userUpdate.service";
const userUpdateController = async (req: Request, res: Response) => {
  try {
    const  id = req.userId;

    const { name, email, password,  telefone } = req.body;

    const updatedUser = await userUpdateService({
      id,
      name,
      email,
      password,
      telefone,

    });

    return res.status(200).send({ updatedUser, message: "Usuário Atualizado" });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userUpdateController;
