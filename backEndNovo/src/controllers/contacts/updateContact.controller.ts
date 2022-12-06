import { Request, Response } from "express";
import updateContactService from "../../services/contact/updateContact.service";
import userUpdateService from "../../services/user/userUpdate.service";

const updateContactController = async (req: Request, res: Response) => {
  try {

    const contactId = req.params.id

    const  id = req.userId;

    const { name, email,  telefone } = req.body;

    const updatedUser = await updateContactService({
      id,
      name,
      email,
      contactId,
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

export default updateContactController;
