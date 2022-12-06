import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../../Provider/modalState/actions";
import Form from "../../components/Form";
import * as yup from "yup";
import { services } from "../../services/api";
import { Styled } from "./styles";
import { logOff } from "../../Provider/user/actions";
import TechCard from "../../components/ContactCard";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { paths } from "../../routes";
import { useState, useEffect } from "react";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector((state) => state.logged);
  const [contacts, setContacts] = useState([]);

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup
      .string()
      .email("O email está errado")
      .required("Campo obrigatório"),
    telefone: yup.string().required("Campo obrigatório"),
  });

  const action = ({ name, email, telefone }) => {
    services()
      .user.createContact({ name, email, telefone })
      .then((res) => {
        dispatch(closeModal());
        toast.success("Contato adicionado com sucesso!");
        getUserContacts();
      })
      .catch((err) => {
        toast.error("Algum erro ocorreu!");
        console.log(err);
      });
  };

  const editAction = ({id, name, email, telefone }) => {
    services()
      .user.updateContact({id, name, email, telefone })
      .then((res) => {
        dispatch(closeModal());
        toast.success("Contato adicionado com sucesso!");
        getUserContacts();
      })
      .catch((err) => {
        toast.error("Algum erro ocorreu!");
        console.log(err);
      });
  };

  const fields = [
    {
      name: "name",
      id: "techForm2",
      label: "Nome",
      placeholder: "Nome",
      type: "text",
    },
    {
      name: "email",
      id: "techForm3",
      label: "Email",
      placeholder: "Email",
      type: "text",
    },
    {
      name: "telefone",
      id: "techForm4",
      label: "Telefone",
      placeholder: "Telefone",
      type: "number",
    },
  ];

  const handleModal = () => {
    dispatch(
      openModal(
        "Cadastrar Contato",
        <Form
          title=""
          buttonTitle="Cadastrar Contato"
          schema={schema}
          action={action}
          fields={fields}
        />,
        []
      )
    );
  };


  const handleEditModal = () => {
    dispatch(
      openModal(
        "Editar Contato",
        <Form
          title=""
          buttonTitle="Editar Contato"
          schema={schema}
          action={editAction}
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

  function getUserContacts() {
    services()
      .user.getUsersContacts()
      .then((res) => {
        console.log(res.data)
        const contatos = res.data;
        setContacts(contatos);
      })
      .catch((err) => toast.error("Algum erro ocorreu!"));
  }

  function handleDeleteTech(id) {
    services()
      .user.deleteContact(id)
      .then((res) => {
        toast.success("Contato apagado com sucesso!");
        getUserContacts();
      })
      .catch((err) => toast.error("Ocorreu algum erro!"));
  }

  function handleEditContact(id, data) {
    handleEditModal()
    services()
      .user.updateContact(id, data)
      .then((res) => {
        toast.success("Contato editado com sucesso!");
        getUserContacts();
      })
      .catch((err) => toast.error("Ocorreu algum erro!"));
  }

  useEffect(() => {
    if (!isLogged) {
      getUserContacts();
    }
  }, [isLogged]);

  return (
    <Styled>
      <header>
        <h1>Agenda</h1>
        <button onClick={handleLogoff}>Sair</button>
      </header>
      <div className="divTop">{/* <h3>Olá, {userInfo.data.name}</h3> */}</div>
      <div>
        <h2>Contatos</h2>
        <button className="buttonAdd" onClick={handleModal}>
          +
        </button>
      </div>
      <ul>
        {contacts.map((item, index) => (
          <TechCard
            key={index}
            data={item}
            
            editContact={()=> handleEditContact(item.id, item.data)}
            deleteTech={() => handleDeleteTech(item.id)}
          />
        ))}
      </ul>
    </Styled>
  );
}

export default Home;
