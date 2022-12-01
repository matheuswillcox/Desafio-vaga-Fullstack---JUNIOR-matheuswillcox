import { IUserCreate, IUserWithoutPassword } from "../../interfaces/users";
import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";
import { hash } from "bcryptjs";

const userCreateService = async ({
  name,
  email,
  password,
  telefone,
}: IUserCreate) => {
  const userRepository = AppDataSource.getRepository(User);

  const hashedPassword = await hash(password, 10);

  const users = await userRepository.find();

  const emailAlreadyExists = users.find((user) => user.email === email);

  if (emailAlreadyExists) {
    throw new Error("Esse email já existe");
  }

  const user = new User();
  user.name = name;
  user.email = email;
  user.password = hashedPassword;
  user.telefone = telefone;

  userRepository.create(user);
  await userRepository.save(user);

  const removePassword = (object: User): IUserWithoutPassword => {
    console.log(object);
    return {
      name: object.name,
      email: object.email,
      telefone: object.telefone,
      id: object.id,
      created_at: object.created_at,
      updated_at: object.updated_at,
    };
  };

  return removePassword(user);
};

export default userCreateService;
