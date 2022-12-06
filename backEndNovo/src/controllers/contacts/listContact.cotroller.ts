import { Request, Response } from "express";
import listContactService from "../../services/contact/listContact.service";

const listContactController = async (req: Request, res: Response) => {
  try {

    const id = req.userId;

    const users = await listContactService({id});

    return res.send(users);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default listContactController;
