import './App.css';
import Logo from './components/Logo/Logo.js'
import Menu from './components/Menu/Menu.js'
import Icons from './components/Icons/Icons.js'

function App() {
  return (
    <div className="App">
      <header className='App__header'>
        <Logo />
        <Menu />
        <Icons />
      </header>
    </div>
  );
}

export default App