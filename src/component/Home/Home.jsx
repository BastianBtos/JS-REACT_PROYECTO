import './Home.css';
import {useEffect} from "react";


function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className="text-[25px] bg-[white] uppercase ">
                <marquee scrollamount="15"><p>Descubre una selección excepcional de las mejores consolas en un solo
                    lugar. Desde las más potentes, con gráficos impresionantes y carga rápida, hasta opciones
                    innovadoras que transforman la experiencia de juego, tenemos algo para cada tipo de gamer.</p>
                </marquee>
                <div className="bg-hero-pattern bg-cover h-[700px] bg-center"/>
            </div>
        </>
    )
}

export default Home