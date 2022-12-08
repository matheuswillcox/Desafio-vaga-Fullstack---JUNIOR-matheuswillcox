import { Container } from "./styles";
import Form from "../../components/Form";
import * as yup from "yup";
import { services } from "../../services/api";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { paths } from "../../routes";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { logUser } from "../../Provider/user/actions";
import jwt_decode from "jwt-decode";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("O email está errado")
      .required("Campo obrigatório"),

    password: yup.string().required("Campo obrigatório"),
  });
  const action = ({ email, password }) => {
    services()
      .login({ email, password })
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        const { name, id } = jwt_decode(res.data.token);
        localStorage.setItem("name", JSON.stringify(name));
        localStorage.setItem("userId", JSON.stringify(id));
        dispatch(logUser());
      })
      .catch((err) => {
        toast.error("Login ou senha inválidos");
      });
  };
  const fields = [
    {
      name: "email",
      id: "loginForm2",
      label: "Email",
      placeholder: "Digite seu email",
      type: "text",
    },
    {
      name: "password",
      id: "loginForm1",
      label: "Senha",
      placeholder: "Digite sua senha",
      type: "password",
    },
  ];

  return (
    <Container>
      <h1>Agenda</h1>
      <div className="boxForm">
        <Form
          title="Login"
          buttonTitle="Entrar"
          schema={schema}
          action={action}
          fields={fields}
        />

        <div className="registerMessage">Ainda não possui uma conta?</div>
        <Button onClick={() => navigate(paths.register)}>Cadastre-se</Button>
      </div>
    </Container>
  );
}

export default Login;
