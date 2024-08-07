import './Icons.css';
import profile from './../../images/perfil.svg'
import bag from './../../images/sacola.svg'

const icons = [profile, bag]

function Icons() {
    return (
        <ul className="menu__icon">
            { icons.map( (item) => (
                <li className="menu__icon-item">
                    <img src={item} alt="icon" />
                </li>
            ))}
        </ul>
    )
}

export default Icons