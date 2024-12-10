import './Home.css';
import {useEffect} from "react";
import {Link} from "react-router-dom";


function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="relative text-[25px] bg-[white] uppercase ">
                <marquee scrollamount="15"><p>Descubre una selección excepcional de las mejores consolas en un solo
                    lugar. Desde las más potentes, con gráficos impresionantes y carga rápida, hasta opciones
                    innovadoras que transforman la experiencia de juego, tenemos algo para cada tipo de gamer.</p>
                </marquee>
                <div className="bg-hero-pattern bg-cover h-[700px] bg-center"/>
                <div className="bg-white text-black px-4 py-2 absolute top-3/4 left-2/4 bg-black rounded-lg shadow-lg hover:bg-gray-100 hover:shadow-xl font-bold italic hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] transition duration-300 border border-gray-300">
                    <Link to="/products" className="text-black">
                        COMPRA YA
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Home