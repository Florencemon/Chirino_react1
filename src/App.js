import './App.css';
import NavBar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer
        greeting={
          <p>
            Todavía no tenés nada en el carrito.{' '}
            <span style={{ color: '#ff7a00' }}>
              ¿Te gustaría explorar nuestros productos y empezar a agregar lo que necesitás?
            </span>{' '}
            🛒💥
          </p>
        }
      />
    </div>
  );
}


export default App;
