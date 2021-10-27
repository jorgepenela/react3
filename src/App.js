import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter, Link, Route} from "react-router-dom";
import Biblioteca from './components/Biblioteca';
import Donaciones from './components/Donaciones';
import Inicio from './components/Inicio';
import Juego from './components/juego';
import Trucoteca from './components/Trucoteca';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="bg-dark text-ligth p-3 text-center">
          <h1 className="text-info">🕹️ El bar del vicio &#x1F47E; </h1>          
      </header>              
      <nav>
        <ul className="nav shadow center">
          <li className="nav-item"><Link  className="nav-link" to="/">Inicio 🏚️</Link></li>
          <li className="nav-item"><Link  className="nav-link" to="/Biblioteca">Biblioteca 🎮</Link></li>
          <li className="nav-item"><Link  className="nav-link" to="/Trucoteca">Trucoteca 🖤</Link></li>
          <li className="nav-item"><Link  className="nav-link" to="/Donaciones">Donaciones &#x2615;</Link></li>
        </ul>
      </nav>
      <main className="container">
        <Route path="/" component={Inicio} exact></Route>
        <Route path="/Biblioteca" component={Biblioteca}></Route>
        <Route path="/Trucoteca" component={Trucoteca}></Route>
        <Route path="/Donaciones">
          <Donaciones></Donaciones>
        </Route>
        { /* el :id completa la ruta con el ID que cliqueas, es un parametro */}
        <Route path="/juego/:id" component={Juego}></Route>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
