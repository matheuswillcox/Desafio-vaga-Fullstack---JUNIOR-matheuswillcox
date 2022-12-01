import { User } from "../../entities/user.entity";
import Jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";
import AppDataSource from "../../data-source";
import { IUserLogin } from "../../interfaces/users";

const userLoginService = async ({ email, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.findOneBy({ email });

  if (!users) {
    throw new Error("Usuário não encontrado");
  }

  const passwordMatch = bcrypt.compareSync(password, users.password);

  if (!passwordMatch) {
    throw new Error("Email ou senha inválidos");
  }

  const token = Jwt.sign({ email: email, id: users.id }, "SECRET_KEY", {
    expiresIn: "24h",
  });

  return { token };
};

export default userLoginService;