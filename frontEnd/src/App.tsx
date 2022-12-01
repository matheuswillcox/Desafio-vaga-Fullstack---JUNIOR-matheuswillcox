import GlobalStyle from "./styles/global";
import CustomModal from "./components/Modal";
import {Rotas} from './routes'

function App() {
  return (
    <>
      <GlobalStyle />
      <Rotas />
      <CustomModal />
    </>
  );
}

export default App;
