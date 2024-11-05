import './Home.css';
import Text_1 from "../Text/Text_1.jsx";

function Home() {
    return (
        <>
            <div className="text-[25px] bg-[white] uppercase ">
                <marquee scrollamount="15"><p>Descubre una selección excepcional de las mejores consolas en un solo
                    lugar. Desde las más potentes, con gráficos impresionantes y carga rápida, hasta opciones
                    innovadoras que transforman la experiencia de juego, tenemos algo para cada tipo de gamer.</p>
                </marquee>
            </div>

            <div>
                <div className="bg-hero-pattern bg-cover h-[700px] bg-center"/>
                <div className="col-6 mt-3 justify-items-center text-justify">
                    <Text_1 Titulo="BIENVENIDO A STEAM CONSOLAS"
                            Parrafo="¡Bienvenido a steam consolas! 🎮
                                 Aquí encontrarás todo lo que necesitas para disfrutar de la mejor experiencia de juego. Desde las últimas novedades hasta accesorios imprescindibles, tenemos lo que buscas. Navega por nuestra selección, descubre ofertas exclusivas y prepárate para sumergirte en mundos increíbles.
                                 ¡Comienza tu aventura con nosotros hoy mismo!"/>
                </div>
            </div>

        </>
    )
}

export default Home