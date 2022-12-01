import { Container } from "./styles";
import Form from "../../components/Form";
import * as yup from "yup";
import { services, getUserId } from "../../services/api";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { paths } from "../../routes";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { logUser } from "../../Provider/user/actions";

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
        localStorage.setItem("tokenKenzieHub", JSON.stringify(res.data.token));
        localStorage.setItem(
          "userIdKenzieHub",
          JSON.stringify(res.data.user.id)
        );
        services().user.getOne(getUserId());
        dispatch(logUser(res.data.user));
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
