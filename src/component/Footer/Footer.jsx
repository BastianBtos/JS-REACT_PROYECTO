import facebook from "/facebook.svg";
import twitter from "/twitter-x.svg";
import steam from "/steam_red.svg";
import instagram from "/instagram.svg";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-[#012030] text-white">
            <div className="flex flex-col p-10">
                <div className="flex flex-wrap justify-between mb-8">
                    <div className="w-[150px] m-4">
                        <h4 className="text-sm mb-4">Para ti</h4>
                        <a href="https://store.steampowered.com/?l=spanish" className="hover:scale-110 transition-all duration-500 text-white hover:text-red-500">
                            <p className="text-xs mb-2">Tienda de juegos</p>
                        </a>
                        <Link to="/" className="hover:scale-110 transition-all duration-500 text-white hover:text-red-500">
                            <p className="text-xs mb-2">Steam Consolas</p>
                        </Link>
                        <a href="https://www.steamdeck.com/es/" className="hover:scale-110 transition-all duration-500 text-white hover:text-red-500">
                            <p className="text-xs mb-2">SteamDeck</p>
                        </a>
                    </div>

                    <div className="w-[150px] m-4">
                        <h4 className="text-sm mb-4">Patrocinadores</h4>
                        <a href="https://www.nintendo.com/es-es/?srsltid=AfmBOoq9XflZNdsE1XnISQlaESEEwcJIUNfv5viia9Za8WusX-GheFCK" className="hover:scale-110 transition-all duration-500 text-white hover:text-red-500">
                            <p className="text-xs mb-2">Nintendo</p>
                        </a>
                        <a href="https://www.xbox.com/es-CL/?xr=mebarnav" className="hover:scale-110 transition-all duration-500 text-white hover:text-red-500">
                            <p className="text-xs mb-2">Microsoft</p>
                        </a>
                        <a href="https://www.playstation.com/es-cl/ps5/" className="hover:scale-110 transition-all duration-500 text-white hover:text-red-500">
                            <p className="text-xs mb-2">Sony</p>
                        </a>
                    </div>

                    <div className="w-[150px] m-4">
                        <h4 className="text-sm mb-4">Compañía</h4>
                        <Link to="/about" className="hover:scale-110 transition-all duration-500 text-white hover:text-red-500">
                            <p className="text-xs mb-2">Sobre nosotros</p>
                        </Link>
                        <Link to="/history" className="hover:scale-110 transition-all duration-500 text-white hover:text-red-500">
                            <p className="text-xs mb-2">Historia</p>
                        </Link>
                        <Link to="/contact" className="hover:scale-110 transition-all duration-500 text-white hover:text-red-500">
                            <p className="text-xs mb-2">Contacto</p>
                        </Link>
                    </div>

                    <div className="w-[150px] m-4">
                        <h4 className="text-sm mb-4">Nuestras Redes</h4>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/Steam" className="hover:scale-110 transition-all duration-500">
                                <img src={facebook} alt="Facebook" className="w-[80%]" />
                            </a>
                            <a href="https://x.com/Steam" className="hover:scale-110 transition-all duration-500">
                                <img src={twitter} alt="Twitter" className="w-[80%]" />
                            </a>
                            <a href="https://www.instagram.com/steam_games_official/?hl=es" className="hover:scale-110 transition-all duration-500">
                                <img src={instagram} alt="Instagram" className="w-[80%]" />
                            </a>
                            <a href="https://store.steampowered.com/?l=spanish" className="hover:scale-110 transition-all duration-500">
                                <img src={steam} alt="Steam" className="w-[80%]" />
                            </a>
                        </div>
                    </div>
                </div>

                <hr className="border-t border-white mb-4" />

                <div className="flex justify-between text-xs">
                    <p className="font-semibold">@{new Date().getFullYear()} Valve Corporation. Todos los derechos reservados</p>
                    <div className="flex space-x-8">
                        <a href="https://store.steampowered.com/subscriber_agreement/spanish/" className="hover:scale-110 transition-all duration-500 text-white hover:text-red-500">
                            Términos y Condiciones
                        </a>
                        <a href="https://store.steampowered.com/privacy_agreement/?snr=1_44_44_" className="hover:scale-110 transition-all duration-500 text-white hover:text-red-500">
                            Privacidad
                        </a>
                        <a href="https://help.steampowered.com/es/faqs/view/6639-EB3C-EC79-FF60" className="hover:scale-110 transition-all duration-500 text-white hover:text-red-500">
                            Seguridad
                        </a>
                        <a href="https://help.steampowered.com/es/faqs/view/270E-A6B6-F83C-B9AB" className="hover:scale-110 transition-all duration-500 text-white hover:text-red-500">
                            Cookies
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
