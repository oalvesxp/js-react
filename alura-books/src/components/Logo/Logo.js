import logo from './../../images/logo.svg'
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    font-size: 26px;
`

const Image = styled.img`
    margin-right: 10px;
`

function Logo() {
    return (
        <LogoContainer>
            <Image 
                src={logo} 
                alt="logo" 
                className="logo__img"
            />
            <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    );
}

export default Logo;