import { IcontactCreate } from "../../interfaces/users";
import { Contato } from "../../entities/contato.entity";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";


const contactCreateService = async ({
  name,
  email,
  telefone,
  userId,
}: IcontactCreate) => {

  const userRepository = AppDataSource.getRepository(User);
  const contactRepository = AppDataSource.getRepository(Contato)

  const users = await userRepository.find();

  const user = await userRepository.findOneBy({ id: userId });

  if (!user) {
    throw new Error("User not found");
  }

  const emailAlreadyExists = users.find((user) => user.email === email);

  if (emailAlreadyExists) {
    throw new Error("Esse email já existe");
  }

  const contato = new Contato();
  contato.name = name;
  contato.email = email;
  contato.telefone = telefone;
  contato.user = user

  contactRepository.create(contato);
  await contactRepository.save(contato);

  return contato

};

export default contactCreateService;
