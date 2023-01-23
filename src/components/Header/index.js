import '../../css/colors.css';
import '../../css/template.css';
import '../../css/typograph.css';
import logo from "./img/logo192.png"

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo" className='Logo' />
      <div>
        <input type="text" />
        <input type="button" value="Pesquisa" className='search'/>
        </div>

      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
    </header>
  )
}

export default Header;