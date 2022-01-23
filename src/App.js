import './App.css';
import Container from './Components/Container/Container';
import Header from './Components/Header/Header';
import Opening from './Components/Opening/Opening';
import Form from './Components/FormComponents/Form/Form';
import Protocol from './Components/Protocol/Protocol';
import BoxRenderingApi from './Components/BoxRenderingApi/BoxRenderingApi';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <> 
    <Header />
    <Container>
      <Opening />
      <Form />
      <Protocol />
      <BoxRenderingApi />
    </Container>
    <Footer />
    </>
  );
}

export default App;
