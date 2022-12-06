import { Request, Response } from "express";
import deleteContactService from "../../services/contact/deleteContact.service";


const deleteContactController = async (req: Request, res: Response) => {
  try {
    const  id  = req.params.id

    await deleteContactService({ id });

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

export default deleteContactController;
