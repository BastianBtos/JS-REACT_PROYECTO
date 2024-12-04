import logo from "/steam.svg";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../../store/useCart.jsx";

function Header_componente() {
    const { cartItems } = useCart();

    return (
        <section className="m-[88px]">
            <header className="shadow-md w-full fixed top-0 left-0 z-10 bg-gray-900">
                <nav id="menu" className="container mx-auto p-4">
                    <ul className="flex items-center justify-between gap-4 md:gap-6">
                        <Link to="/" className="hover:scale-110 transition-transform duration-500 cursor-pointer">
                            <img
                                src={logo}
                                alt="logo"
                                className="h-8 sm:h-10 object-contain"
                            />
                        </Link>

                        <li className="hover:scale-110 transition-transform duration-500 cursor-pointer">
                            <Link
                                to="/productos"
                                className="text-white hover:text-primary text-sm sm:text-base uppercase tracking-wide"
                            >
                                Productos
                            </Link>
                        </li>

                        <li className="hover:scale-110 transition-transform duration-500 cursor-pointer">
                            <Link
                                to="/category/steamdeck"
                                className="text-white hover:text-primary text-sm sm:text-base uppercase tracking-wide"
                            >
                                SteamDeck
                            </Link>
                        </li>

                        <li className="hover:scale-110 transition-transform duration-500 cursor-pointer">
                            <Link
                                to="/category/xbox"
                                className="text-white hover:text-primary text-sm sm:text-base uppercase tracking-wide"
                            >
                                XboxSeries
                            </Link>
                        </li>

                        <li className="hover:scale-110 transition-transform duration-500 cursor-pointer">
                            <Link
                                to="/category/ps5"
                                className="text-white hover:text-primary text-sm sm:text-base uppercase tracking-wide"
                            >
                                PS5
                            </Link>
                        </li>

                        <li className="hover:scale-110 transition-transform duration-500 cursor-pointer">
                            <Link
                                to="/category/nintendoswitch"
                                className="text-white hover:text-primary text-sm sm:text-base uppercase tracking-wide"
                            >
                                NintendoSwitch
                            </Link>
                        </li>

                        <div className="relative">
                            <Link to="/cart">
                                <button className="relative text-white hover:text-primary">
                                    <FaShoppingCart className="text-2xl" />
                                    {cartItems.length > 0 && (
                                        <span className="absolute -top-3 -right-3 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
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
