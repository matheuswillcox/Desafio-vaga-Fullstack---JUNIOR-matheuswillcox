import { IUserUpdate } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import bcrypt from "bcryptjs";

const userUpdateService = async ({
  id,
  name,
  email,
  password,

}: IUserUpdate) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.findOneBy({ id });

  if (!users) {
    throw new Error("Usuário");
  }

  let hashedPassword = password;

  if (password) {
    hashedPassword = await bcrypt.hash(password, 10);
  }

  const updatedUser = {
    name,
    email,
    password: hashedPassword,
    updated_at: new Date(),
  };

  await userRepository.update({ id }, updatedUser);

  const userUpdated = await userRepository.findOneBy({ id });

  return userUpdated;
};

export default userUpdateService;
