import './App.css';
import Container from './Components/Container/Container';
import Header from './Components/Header/Header';
import Opening from './Components/Opening/Opening';
import Form from './Components/FormComponents/Form/Form';
import Protocol from './Components/Protocol/Protocol';

function App() {
  return (
    <> 
    <Header />
    <Container>
      <Opening title="reabertura smart fit">
      O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. Por isso, confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.
      </Opening>
      <Form />
      <Protocol />
    </Container>
    </>
  );
}

export default App;
