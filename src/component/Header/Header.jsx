import logo from "/steam.svg";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../../store/useCart.jsx";

function Header_componente() {
    const { cartItems } = useCart();

    return (
        <section id="top" className="m-[88px]">
            <header className="shadow-md w-full fixed top-0 left-0 z-10 bg-gray-900">
                <nav id="menu" className="container mx-auto p-4 ">
                    <ul className="flex items-center justify-center gap-4 md:gap-6">
                        <li className="hover:scale-110 transition-transform duration-500 cursor-pointer">
                            <Link to="/" className="text-white hover:text-primary text-sm sm:text-base uppercase tracking-wide">
                                Inicio
                            </Link>
                        </li>

                        <li className="relative group hover:scale-120 duration-500 cursor-pointer">
                            <span
                                className="text-white hover:text-primary text-sm sm:text-base uppercase tracking-wide">
                                Productos
                            </span>
                            <ul className="absolute top-4 hidden group-hover:block bg-gray-800 text-white text-sm sm:text-base uppercase tracking-wide p-2 mt-2 rounded-md w-48">
                                <li className="hover:bg-primary p-2">
                                    <Link to="/products" className="block">Todos</Link>
                                </li>
                                <li className="hover:bg-primary p-2">
                                    <Link to="/category/ps5" className="block">PS5</Link>
                                </li>
                                <li className="hover:bg-primary p-2">
                                    <Link to="/category/nintendoswitch" className="block">Nintendo Switch</Link>
                                </li>
                                <li className="hover:bg-primary p-2">
                                    <Link to="/category/steamdeck" className="block">SteamDeck</Link>
                                </li>
                                <li className="hover:bg-primary p-2">
                                    <Link to="/category/xbox" className="block">Xbox Series</Link>
                                </li>
                            </ul>
                        </li>

                        <Link to="/" className="hover:scale-110 transition-transform duration-500 cursor-pointer">
                        <img src={logo} alt="..." className="h-15 sm:h-10 object-contain"/>
                        </Link>

                        <li className="hover:scale-110 transition-transform duration-500 cursor-pointer">
                            <Link to="/contact" className="text-white hover:text-primary text-sm sm:text-base uppercase tracking-wide">Contacto</Link>
                        </li>
                        <li className="hover:scale-110 transition-transform duration-500 cursor-pointer">
                            <Link to="/about" className="text-white hover:text-primary text-sm sm:text-base uppercase tracking-wide">
                                Nosotros
                            </Link>
                        </li>

                        <div className="relative">
                            <Link to="/cart">
                                <button className="relative text-white hover:text-primary">
                                    <FaShoppingCart className="text-2xl"/>
                                    {cartItems.length > 0 && (
                                        <span
                                            className="absolute -top-3 -right-3 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                            {cartItems.length}
                                        </span>
                                    )}
                                </button>
                            </Link>
                        </div>
                    </ul>
                </nav>
            </header>
        </section>
    );
}

export default Header_componente;
