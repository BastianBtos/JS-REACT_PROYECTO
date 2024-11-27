import "./Header.css"
import logo from "/steam.svg"
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useCart from "../../store/useCart.jsx";


function Header_componente() {
    const { cart } = useCart();
    return (
        <section className="m-[72px] ">
            <header className="header_componente shadow-md w-full pt-0 top-0 left-0 position-fixed z-10 m-88">
                <nav id='menu' className="desplegable">
                    <ul className=" flex justify-center items-center">
                        <li className="m-0 hover:scale-110 transition-all duration-500 cursor-pointer"><Link to="" className="estilo_bloque hover padding_lateral textobajar">Inicio</Link></li>
                        <li className="m-0 estilo_lista hover:scale-110 transition-all duration-500 cursor-pointer"><Link to="/productos" className="estilo_bloque hover padding_lateral textobajar">Productos</Link></li>
                        <li className="m-0 estilo_lista hover:scale-110 transition-all duration-500 cursor-pointer"><Link to="/category/steamdeck" className="estilo_bloque hover padding_lateral textobajar">SteamDeck</Link></li>
                        <Link to="/" className="m-0 hover:scale-110 transition-all duration-500 cursor-pointer"><img src={logo} alt="..."/></Link>
                        <li className="m-0 estilo_lista hover:scale-110 transition-all duration-500 cursor-pointer"><Link to="/category/xbox" className="estilo_bloque hover padding_lateral textobajar">XboxSeries</Link></li>
                        <li className="m-0 estilo_lista hover:scale-110 transition-all duration-500 cursor-pointer"><Link to="/category/ps5" className="estilo_bloque hover padding_lateral textobajar">PS5</Link></li>
                        <li className="m-0 estilo_lista hover:scale-110 transition-all duration-500 cursor-pointer"><Link to="/category/nintendoswitch" className="estilo_bloque hover padding_lateral textobajar">NintendoSwitch</Link></li>
                        <div className=" space-x-4"><Link to={'/cart'}><button className=" relative"><FaShoppingCart className=" text-2xl"/><span className=" absolute -top-3 -right-3 bg-primary text-white text-xs rounded-full w-5 h-5 flex justify-center items-center">{cart.length}</span></button></Link></div>
                    </ul>
                </nav>
            </header>
        </section>
    )
}

export default Header_componente;