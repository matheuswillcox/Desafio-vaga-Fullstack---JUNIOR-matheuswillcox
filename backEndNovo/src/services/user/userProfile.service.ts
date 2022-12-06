import { IUserProfile } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const userProfileService = async ({ id }: IUserProfile) => {

  const userRepository = AppDataSource.getRepository(User);
 
  const users = await userRepository.findOneBy({ id });

  if (!users) {
    throw new Error("Usuário não existe");
  }

  return users;
};

export default userProfileService;
