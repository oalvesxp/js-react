import styled from 'styled-components';

const MenuContainer = styled.ul`
    display: flex;
`

const MenuItem = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;  
`


const itens = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function Menu() {
    return (
        <MenuContainer>
            { itens.map(
                (item) => (
                    <MenuItem>
                        <p>{item}</p>
                    </MenuItem>
                ))
            }
        </MenuContainer>
    )
}

export default Menu