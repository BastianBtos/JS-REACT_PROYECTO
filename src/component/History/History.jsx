import Texto_1 from "../Text/Text_1.jsx";
import {useEffect} from "react";
function History() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className="bg-hero-pattern bg-cover bg-fixed h-[700px] bg-center"/>
            <div className="text-justify">
                <Texto_1 Titulo="Nuestra historia" Parrafo="Steam es una plataforma que ha marcado un antes y un después en mi experiencia como gamer. Desde su lanzamiento en 2003 por Valve Corporation, he sido testigo de su evolución y de cómo se ha convertido en un verdadero referente en el mundo de los videojuegos. Al principio, Steam se diseñó para facilitar las actualizaciones de juegos como Counter-Strike, pero rápidamente se expandió, y yo me di cuenta de que estaba ante algo mucho más grande.
                Recuerdo que, al principio, la plataforma tuvo sus altibajos. Hubo momentos en que enfrentaba problemas de conexión y errores que hacían que la experiencia fuera frustrante. Sin embargo, Valve estaba comprometido a mejorar, y poco a poco, Steam se volvió más estable y eficiente. Con el tiempo, la oferta de juegos creció exponencialmente, y eso realmente me emocionó. Podía encontrar desde los grandes títulos de estudio hasta joyas indie que nunca hubiera descubierto de otra manera.
                Una de las cosas que más me atrapó de Steam fue la introducción de logros y trofeos. Empecé a disfrutar aún más de los juegos al intentar completar esos desafíos adicionales. Además, la comunidad de Steam se convirtió en un lugar donde podía conectar con otros jugadores, compartir estrategias y, lo más importante, descubrir mods y contenido creado por usuarios que enriquecían mi experiencia de juego.
                Las ventas estacionales, como las de verano e invierno, se convirtieron en eventos que esperaba con ansias. La emoción de ver grandes descuentos en mis juegos favoritos era casi adictiva. Estas promociones no solo me ayudaron a ampliar mi biblioteca, sino que también hicieron que Steam se consolidara como el lugar al que acudir para mis compras de videojuegos.
                A medida que Valve continuó innovando, Steam se adaptó a nuevas tecnologías, como la realidad virtual. Ver cómo se incorporaba el soporte para dispositivos como HTC Vive fue fascinante, y me hizo sentir que la plataforma seguía siendo relevante y emocionante.
                Hoy, Steam no es solo una tienda; es un ecosistema donde puedo conectar, crear y explorar un mundo vasto de entretenimiento interactivo. Con millones de usuarios activos y una biblioteca que abarca todos los géneros, ha dejado una huella profunda en mi vida como gamer. La forma en que Steam ha transformado la cultura del gaming es innegable, y me siento afortunado de ser parte de esta comunidad."/>
            </div>
        </>
    )
}
export default History