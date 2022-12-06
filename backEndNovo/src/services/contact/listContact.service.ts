import AppDataSource from "../../data-source";
import { Contato } from "../../entities/contato.entity";
import { User } from "../../entities/user.entity";
import { IContactProfile } from "../../interfaces/users";


const listContactService = async ({id}: IContactProfile) => {

  const contactRepository = AppDataSource.getRepository(User);

  const contact = await contactRepository.findOneBy({ id });
  
  return contact?.Contato;
};

export default listContactService;

