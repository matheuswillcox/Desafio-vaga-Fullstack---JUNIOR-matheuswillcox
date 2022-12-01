import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../../Provider/modalState/actions";
import Form from "../../components/Form";
import * as yup from "yup";
import { services } from "../../services/api";
import { Styled } from "./styles";
import {
  logOff,
  userAddTech,
  userRemoveTech,
} from "../../Provider/user/actions";
import TechCard from "../../components/TechCard";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { paths } from "../../routes";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.user);

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),

    status: yup.string().required("Campo obrigatório"),
  });

  const action = ({ title, status }) => {
    services()
      .user.createTechs({ title, status })
      .then((res) => {
        dispatch(userAddTech({ title, status }));
        dispatch(closeModal());
        toast.success("Tech adicionada com sucesso!");
      })
      .catch((err) => toast.error("Algum erro ocorreu!"));
  };

  const fields = [
    {
      name: "title",
      id: "techForm2",
      label: "Nome",
      placeholder: "Tecnologia",
      type: "text",
    },
    {
      name: "status",
      id: "techForm1",
      label: "Selecionar Status",
      placeholder: "Status",
      type: "select",
      options: ["Iniciante", "Intermediário", "Avançado"],
    },
  ];

  const handleModal = () => {
    dispatch(
      openModal(
        "Cadastrar Tecnologia",
        <Form
          title=""
          buttonTitle="Cadastrar Tecnologia"
          schema={schema}
          action={action}
          fields={fields}
        />,
        []
      )
    );
  };

  function handleLogoff() {
    localStorage.clear();
    navigate(paths.login);
    dispatch(logOff());
  }

  function handleDeleteTech(id) {
    services()
      .user.deleteTechs(id)
      .then((res) => {
        dispatch(userRemoveTech(id));
        toast.success("Tech apagada com sucesso!");
      })
      .catch((err) => toast.error("Ocorreu algum erro!"));
  }

  return (
    <Styled>
      <header>
        <h1>Agenda</h1>
        <button onClick={handleLogoff}>Sair</button>
      </header>
      <div className="divTop">
        <h3>Olá, {userInfo.data.name}</h3>
        <span>{userInfo.data.course_module} </span>
      </div>
      <div>
        <h2>Contatos</h2>
        <button className="buttonAdd" onClick={handleModal}>
          +
        </button>
      </div>
      <ul>
        {userInfo?.data?.techs?.map((item, index) => (
          <TechCard
            key={index}
            data={item}
            deleteTech={() => handleDeleteTech(item.id)}
          />
        ))}
      </ul>
    </Styled>
  );
}

export default Home;
