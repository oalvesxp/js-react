import './App.css';
import Logo from './components/Logo/Logo.js'
import Menu from './components/Menu/Menu.js'
import profile from './images/perfil.svg'
import bag from './images/sacola.svg'

const icons = [profile, bag]

function App() {
  return (
    <div className="App">
      <header className='App__header'>
        <Logo />
        <Menu />

        <ul className="menu__icon">
          { icons.map( (item) => (
            <li className="menu__icon-item">
              <img src={item} alt="icon" />
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App