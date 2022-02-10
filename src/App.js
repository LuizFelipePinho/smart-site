import './App.css';
import Container from './Components/Container/Container';
import Header from './Components/Header/Header';
import Opening from './Components/Opening/Opening';
import Form from './Components/FormComponents/Form/Form';
import Footer from './Components/Footer/Footer';

function App() {
 
  return (
    <div className='container-page'> 
    <Header />
     <Container>
      <Opening />
      <Form />
    </Container>
   <Footer />
    </div>
  );
}

export default App;


// protocol e openeing estão bugando a responsividade
