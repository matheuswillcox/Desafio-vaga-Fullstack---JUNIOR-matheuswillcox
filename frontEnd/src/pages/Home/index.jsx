import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../../Provider/modalState/actions";
import Form from "../../components/Form";
import * as yup from "yup";
import { services } from "../../services/api";
import { Styled } from "./styles";
import { logOff } from "../../Provider/user/actions";
import ContactCard from "../../components/ContactCard";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { paths } from "../../routes";
import { useState, useEffect } from "react";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector((state) => state.logged);
  const [contacts, setContacts] = useState([]);
  const userName = JSON.parse(localStorage.getItem("name"));
  const userId = JSON.parse(localStorage.getItem("userId"));

  const fieldsDelete = [];
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

  const deleteSchema = yup.object().shape({});

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup
      .string()
      .email("O email está errado")
      .required("Campo obrigatório"),
    telefone: yup.string().required("Campo obrigatório"),
  });

  const action = ({ name, email, telefone }) => {
    const request = services().user.createContact({ name, email, telefone });
    request
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

  const handleModal = () => {
    dispatch(
      openModal(
        `Cadastrar contato`,
        <Form
          title=""
          buttonTitle={`Cadastrar contato`}
          schema={schema}
          action={(data) => action(data)}
          fields={fields}
        />,
        []
      )
    );
  };

  const actionEditContact = (id, { name, email, telefone }) => {
    const request = services().user.updateContact(id, {
      name,
      email,
      telefone,
    });
    request
      .then((res) => {
        dispatch(closeModal());
        toast.success("Contato editado com sucesso!");
        getUserContacts();
      })
      .catch((err) => {
        toast.error("Algum erro ocorreu!");
        console.log(err);
      });
  };

  const handleModalEditContact = (id) => {
    dispatch(
      openModal(
        `Editar contato`,
        <Form
          title=""
          buttonTitle={`Editar contato`}
          schema={schema}
          action={(data) => actionEditContact(id, data)}
          fields={fields}
        />,
        []
      )
    );
  };

  const actionEditUser = (id, { name, email, telefone }) => {
    const request = services().user.editUser({ name, email, telefone });
    request
      .then((res) => {
        dispatch(closeModal());
        toast.success("Usuário editado com sucesso!");
        getUserContacts();
      })
      .catch((err) => {
        toast.error("Algum erro ocorreu!");
        console.log(err);
      });
  };

  const handleEditUserModal = (userId) => {
    dispatch(
      openModal(
        "Editar usuário",
        <Form
          title=""
          buttonTitle={"Editar usuário"}
          schema={schema}
          action={(data) => actionEditUser(userId, data)}
          fields={fields}
        />,
        []
      )
    );
  };

  const actionDeleteUser = (userId) => {
    const request = services().user.deleteUser();
    request
      .then((res) => {
        dispatch(closeModal());
        handleLogoff();
        toast.success("Usuário deletado com sucesso!");
      })
      .catch((err) => {
        toast.error("Algum erro ocorreu!");
        console.log(err);
      });
  };

  const handleDeleteUserModal = (userId) => {
    dispatch(
      openModal(
        "Excluir o usuário?",
        <Form
          fields={fieldsDelete}
          schema={deleteSchema}
          title=""
          buttonTitle={"Excluir usuário"}
          action={() => actionDeleteUser(userId)}
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
        const contatos = res.data;
        setContacts(contatos);
      })
      .catch((err) => toast.error("Algum erro ocorreu!"));
  }

  function handleDeleteContact(id) {
    services()
      .user.deleteContact(id)
      .then((res) => {
        toast.success("Contato apagado com sucesso!");
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
      <div className="divTop">
        <h3>Olá, {userName}</h3>
        <button
          onClick={() => {
            handleEditUserModal(userId);
          }}
          style={{ color: "white", height: "40px" }}
        >
          Editar usuário
        </button>
        <button
          onClick={() => {
            handleDeleteUserModal(userId);
          }}
          style={{ color: "white", height: "40px" }}
        >
          Excluir usuário
        </button>
      </div>
      <div>
        <h2>Contatos</h2>
        <button className="buttonAdd" onClick={handleModal}>
          +
        </button>
      </div>
      <ul>
        {contacts.map((item, index) => (
          <ContactCard
            key={index}
            data={item}
            editContact={() => handleModalEditContact(item.id, item.data)}
            deleteContact={() => handleDeleteContact(item.id)}
          />
        ))}
      </ul>
    </Styled>
  );
}

export default Home;
