import { IUserDelete } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const userDeleteService = async ({ id }: IUserDelete) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.findOneBy({ id });

  if (!users) {
    throw new Error("Usuário não existe");
  }

  await userRepository.delete(id);

  return;
};

export default userDeleteService;
