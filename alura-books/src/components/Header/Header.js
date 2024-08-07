import './Header.css'
import Logo from './../Logo/Logo.js'
import Menu from './../Menu/Menu.js'
import Icons from './../Icons/Icons.js'

function Header() {
    return (
        <header className='App__header'>
            <Logo />
            <Menu />
            <Icons />
      </header>
    )
}

export default Header