import { IContactUpdate } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import bcrypt from "bcryptjs";
import { Contato } from "../../entities/contato.entity";

const updateContactService = async ({
  id,
  contactId,
  name,
  email,
  telefone

}: IContactUpdate) => {

  const contactRepository = AppDataSource.getRepository(Contato);

  const users = await contactRepository.findOneBy({ id: contactId });

  if (!users) {
    throw new Error("Usuário");
  }

  const updatedUser = {
    name,
    email,
    telefone
  };

  await contactRepository.update({ id: contactId }, updatedUser);

  const userUpdated = await contactRepository.findOneBy({ id: contactId });

  return userUpdated;
};

export default updateContactService;
