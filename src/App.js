import './App.css';
import Testimonios from './componentes/Testimonios';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Titulo Titulo Titulo Titulo Titulo</h1>
     <Testimonios 
     nombre='Tu vieja1'
     pais='Tu vieja1'
     imagen='banda1'
     cargo='Tu vieja1'
     empresa='Tu vieja1'
     testimonio='Tu vieja'/>
      <Testimonios 
     nombre='Tu vieja1'
     pais='Tu vieja1'
     imagen='historia1'
     cargo='Tu vieja1'
     empresa='Tu vieja1'
     testimonio='Tu vieja'/>
     <Testimonios 
     nombre='Tu vieja1'
     pais='Tu vieja1'
     imagen='banda1'
     cargo='Tu vieja1'
     empresa='Tu vieja1'
     testimonio='Tu vieja'/>
    </div>
    </div>

    
  );
}

export default App;
