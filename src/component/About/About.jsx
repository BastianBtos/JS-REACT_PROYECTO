import {useEffect} from "react";
import Text_2 from "../Text/Text_2.jsx";
import Text_1 from "../Text/Text_1.jsx";
function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="bg-hero-pattern2 bg-cover bg-fixed h-[700px] bg-center"/>
                <Text_1 Titulo="Sobre Nosotros" Parrafo="Misión: Nuestra misión es ofrecer a los entusiastas de los videojuegos una experiencia de compra inigualable al proporcionar una amplia selección de consolas de última generación, accesorios y juegos. Nos comprometemos a garantizar la máxima calidad en nuestros productos, junto con un servicio al cliente excepcional. Valoramos la pasión por el gaming y nos esforzamos por crear un entorno donde cada gamer, sin importar su nivel de experiencia, pueda encontrar lo que necesita para disfrutar al máximo de su pasión."/>
                <Text_2 Parrafo="Visión: Nuestra visión es convertirnos en el eCommerce líder en el mercado de consolas y videojuegos, reconocido no solo por la variedad y calidad de nuestros productos, sino también por nuestra dedicación a la comunidad gamer. Aspiramos a ser la primera opción para aquellos que buscan mantenerse a la vanguardia en tecnología y entretenimiento digital. Imaginamos un futuro donde podamos conectar a jugadores de todo el mundo, creando una plataforma que no solo ofrezca productos, sino que también fomente una comunidad activa, donde se compartan experiencias, se realicen eventos y se promueva el conocimiento sobre las últimas tendencias en el mundo del gaming. A través de la innovación y un enfoque en la sostenibilidad, queremos dejar una huella positiva en la industria y en la experiencia de nuestros clientes."/>
            </>
            )
            }

            export default About