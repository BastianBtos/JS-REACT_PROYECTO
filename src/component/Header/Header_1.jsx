import "./Header.css"
import logo from "/steam.svg"
import {Link} from 'react-router-dom';


function Header_componente() {
    const menu = () =>{
        let desplegar = document.getElementById('menu');
        let cerrar = document.getElementById('x');
        desplegar.classList.toggle('abrir');
        cerrar.classList.toggle('ponerx');
    }
    return (
        <header className="header_componente shadow-md w-full pt-0 top-0 left-0 position-fixed z-10 m-88">
            <div className="barras">
                <button onClick={menu} className='boton_menu margen_boton' id='x'></button>
            </div>
            <nav id='menu' className="desplegable">
                <ul className="nav_lateral flex justify-center items-center">
                    <li className="m-2 hover:scale-110 transition-all duration-500 cursor-pointer"><Link to="" className="estilo_bloque hover padding_lateral">Inicio</Link></li>
                    <li className="m-2 estilo_lista hover:scale-110 transition-all duration-500 cursor-pointer"><Link to="/productos" className="estilo_bloque hover padding_lateral">Productos</Link></li>
                    <li className="m-2 estilo_lista hover:scale-110 transition-all duration-500 cursor-pointer"><Link to="/category/steamdeck" className="estilo_bloque hover padding_lateral">SteamDeck</Link></li>
                    <Link to="/" className="m-2 logo_barra hover:scale-110 transition-all duration-500 cursor-pointer"><img id="logo" src={logo} alt="..."/></Link>
                    <li className="m-2 estilo_lista hover:scale-110 transition-all duration-500 cursor-pointer"><Link to="/category/xbox" className="estilo_bloque hover padding_lateral">XboxSeries</Link></li>
                    <li className="m-2 estilo_lista hover:scale-110 transition-all duration-500 cursor-pointer"><Link to="/category/ps5" className="estilo_bloque hover padding_lateral">PS5</Link></li>
                    <li className="m-2 estilo_lista hover:scale-110 transition-all duration-500 cursor-pointer"><Link to="/category/nintendoswitch" className="estilo_bloque hover padding_lateral">NintendoSwitch</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header_componente;