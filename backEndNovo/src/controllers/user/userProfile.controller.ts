import { Request, Response } from "express";
import userProfileService from "../../services/user/userProfile.service";

const userProfileController = async (req: Request, res: Response) => {
  try {
    
    const id  = req.userId;
  
    const users = await userProfileService({ id });

    return res.send(users);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(404).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userProfileController;
