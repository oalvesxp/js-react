import './Menu.css';


const itens = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function Menu() {
    return (
        <ul className="menu">
            { itens.map(
                (item) => (
                    <li className="menu__item">
                        <p>{item}</p>
                    </li>
                ))
            }
        </ul>
    )
}

export default Menu