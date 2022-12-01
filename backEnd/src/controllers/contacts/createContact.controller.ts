import { Request, Response } from "express";

import contactCreateService from "../../services/contact/contactCreate.service";


const contactCreateController = async (req: Request, res: Response) => {

  try {

    const { name, email, telefone } = req.body;

    const  userId  = "899569d2-ad2a-422a-b859-7416e0ae9749";

    const newUser = await contactCreateService({name, email, telefone, userId});

    return res.status(201).send(newUser);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default contactCreateController;
