import profile from './../../images/perfil.svg'
import bag from './../../images/sacola.svg'
import styled from 'styled-components';

const IconsList = styled.ul`
    display: flex;
    align-items: center;
`

const Icon = styled.li`
    margin-right: 40px;
    width: 25px;
`

const icons = [profile, bag]

function Icons() {
    return (
        <IconsList>
            { icons.map( (item) => (
                <Icon>
                    <img src={item} alt="icon" />
                </Icon>
            ))}
        </IconsList>
    )
}

export default Icons
