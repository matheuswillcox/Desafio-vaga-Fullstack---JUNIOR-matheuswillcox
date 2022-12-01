import { Container } from "./styles";
import Form from "../../components/Form";
import * as yup from "yup";
import { services } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { paths } from "../../routes";
import { toast } from "react-toastify";

function Register() {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup
      .string()
      .email("O email está errado")
      .required("Campo obrigatório"),

    password: yup.string().required("Campo obrigatório"),
    confirmPassword: yup.string().required("Campo obrigatório"),
    //bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    //course_module: yup.string().required("Campo obrigatório"),
  });

  const action = ({ name, email, password, bio, contact, course_module }) => {
    services()
      .user.createUser({ name, email, password, bio, contact, course_module })
      .then((res) => {
        toast.success("Usuário Criado");
        navigate(paths.login);
      })
      .catch((err) => toast.error("Ocorreu algum erro!"));
  };

  function handleLogoff() {
    localStorage.clear();
    navigate(paths.login);
  }

  const fields = [
    {
      name: "name",
      id: "registerForm1",
      label: "Nome",
      placeholder: "Digite seu nome",
      type: "text",
    },
    {
      name: "email",
      id: "registerForm2",
      label: "Email",
      placeholder: "Digite seu email",
      type: "text",
    },
    {
      name: "password",
      id: "registerForm3",
      label: "Senha",
      placeholder: "Digite sua senha",
      type: "password",
    },
    {
      name: "confirmPassword",
      id: "registerForm4",
      label: "confirme sua senha",
      placeholder: "Repita sua senha",
      type: "password",
    },
    {
      name: "contact",
      id: "registerForm6",
      label: "Cotato",
      placeholder: "Opção de contato",
      type: "text",
    },
  ];

  return (
    <Container>
      <header>
        <h1>Agenda</h1>
        <button className="button" onClick={handleLogoff}>
          Voltar
        </button>
      </header>
      <Form
        schema={schema}
        action={action}
        title="Crie sua conta"
        buttonTitle="Cadastrar"
        fields={fields}
      />
    </Container>
  );
}

export default Register;
