import "./Footer.css";
import facebook from "/facebook.svg";
import twiter from "/twitter-x.svg";
import steam from "/steam_red.svg";
import instagram from "/instagram.svg";
import {Link} from 'react-router-dom';

const Footer_1 = () => {
    return (
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links_div">
                        <h4>Para ti</h4>
                        <a className="hover:scale-110 transition-all duration-500 cursor-pointer text-[white] hover:text-[red]" href="https://store.steampowered.com/?l=spanish"><p>Tienda de juegos</p></a>
                        <Link to="/" className="hover:scale-110 transition-all duration-500 cursor-pointer text-[white] hover:text-[red]"><p>Steam Consolas</p></Link>
                        <a className="hover:scale-110 transition-all duration-500 cursor-pointer text-[white] hover:text-[red]" href="https://www.steamdeck.com/es/"><p>SteamDeck</p></a>
                    </div>

                    <div className="sb_footer-links_div">
                        <h4>Patrocinadores</h4>
                        <a className="hover:scale-110 transition-all duration-500 cursor-pointer text-[white] hover:text-[red]" href="https://www.nintendo.com/es-es/?srsltid=AfmBOoq9XflZNdsE1XnISQlaESEEwcJIUNfv5viia9Za8WusX-GheFCK"><p>Nintendo</p></a>
                        <a className="hover:scale-110 transition-all duration-500 cursor-pointer text-[white] hover:text-[red]" href="https://www.xbox.com/es-CL/?xr=mebarnav"><p>Microsoft</p></a>
                        <a className="hover:scale-110 transition-all duration-500 cursor-pointer text-[white] hover:text-[red]" href="https://www.playstation.com/es-cl/ps5/"><p>Sony</p></a>

                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Compañia</h4>
                        <Link to="/about" className="hover:scale-110 transition-all duration-500 cursor-pointer text-[white] hover:text-[red]"><p>Sobre nosotros</p></Link>
                        <Link to="/historia" className="hover:scale-110 transition-all duration-500 cursor-pointer text-[white] hover:text-[red]"><p>Historia</p></Link>
                        <Link to="/contact" className="hover:scale-110 transition-all duration-500 cursor-pointer text-[white] hover:text-[red]"><p>Contacto</p></Link>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Nuestras Redes</h4>
                        <div className="socialmedia">
                            <a className="hover:scale-110 transition-all duration-500 cursor-pointer" href="https://www.facebook.com/Steam"><img src={facebook} alt="..."/></a>
                            <a className="hover:scale-110 transition-all duration-500 cursor-pointer" href="https://x.com/Steam"><img src={twiter} alt="..."/></a>
                            <a className="hover:scale-110 transition-all duration-500 cursor-pointer" href="https://www.instagram.com/steam_games_official/?hl=es"><img src={instagram} alt="..."/></a>
                            <a className="hover:scale-110 transition-all duration-500 cursor-pointer" href="https://store.steampowered.com/?l=spanish"><img src={steam} alt="..." /></a>
                        </div>
                    </div>

                <hr></hr>

                    <div className="sb_footer-bellow">
                        <div className="sb_footer-copyright">
                            <p>@{new Date().getFullYear()} Valve Corporation. Todos los derechos reservados</p>
                        </div>
                        <div className="sb_footer-bellow-links">
                            <a className="hover:scale-110 transition-all duration-500 cursor-pointer text-[white] hover:text-[red]" href="https://store.steampowered.com/subscriber_agreement/spanish/"><p>Terminos y Condiciones</p></a>
                            <a className="hover:scale-110 transition-all duration-500 cursor-pointer text-[white] hover:text-[red]" href="https://store.steampowered.com/privacy_agreement/?snr=1_44_44_"><p>Privacidad</p></a>
                            <a className="hover:scale-110 transition-all duration-500 cursor-pointer text-[white] hover:text-[red]" href="https://help.steampowered.com/es/faqs/view/6639-EB3C-EC79-FF60"><p>Seguridad</p></a>
                            <a className="hover:scale-110 transition-all duration-500 cursor-pointer text-[white] hover:text-[red]" href="https://help.steampowered.com/es/faqs/view/270E-A6B6-F83C-B9AB"><p>Cookies</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer_1