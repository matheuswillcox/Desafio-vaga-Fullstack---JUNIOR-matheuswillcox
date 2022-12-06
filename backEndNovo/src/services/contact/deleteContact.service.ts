import { IUserDelete } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { Contato } from "../../entities/contato.entity";

const deleteContactService = async ({ id }: IUserDelete) => {

  const userRepository = AppDataSource.getRepository(Contato);

  const users = await userRepository.findOneBy({ id });

  if (!users) {
    throw new Error("Usuário não existe");
  }

  await userRepository.delete(id);

  return;
};

export default deleteContactService;
