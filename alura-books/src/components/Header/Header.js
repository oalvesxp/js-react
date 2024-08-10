import Logo from './../Logo/Logo.js'
import Menu from './../Menu/Menu.js'
import Icons from './../Icons/Icons.js'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;

`

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <Menu />
            <Icons />
      </HeaderContainer>
    )
}

export default Header