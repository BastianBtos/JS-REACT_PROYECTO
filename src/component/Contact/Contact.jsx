
import {useEffect} from "react";
function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="mx-[100px]">
                <div className="px-4 sm:px-0 text-center">
                    <h3 className="uppercase text-[35px] font-semibold leading-7 text-[white] mt-[120px]">Contactate con Nosotros</h3>
                </div>
                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="uppercase text-sm font-medium leading-6 text-[white]">Correo Electronico</dt>
                            <dd className="mt-1 text-sm leading-6 text-[white] sm:col-span-2 sm:mt-0">steamconsolas.web@steam.cl
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="uppercase text-sm font-medium leading-6 text-[white]">Call Center</dt>
                            <dd className="mt-1 text-sm leading-6 text-[white] sm:col-span-2 sm:mt-0">600 600 2626
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="uppercase text-sm font-medium leading-6 text-[white]">Correo de promociones</dt>
                            <dd className="mt-1 text-sm leading-6 text-[white] sm:col-span-2 sm:mt-0">promociones.consolas@steam.cl</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="uppercase text-sm font-medium leading-6 text-[white]">Fono de compras</dt>
                            <dd className="mt-1 text-sm leading-6 text-[white] sm:col-span-2 sm:mt-0">600 600 2020 / compras.consolas@steam.cl</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className=" uppercase text-sm font-medium leading-6 text-[white]">Local</dt>
                            <dd className="mt-1 text-sm leading-6 text-[white] sm:col-span-2 sm:mt-0">Tambien puedes contactarnos a traves de nuestro local fisico en el apartado de atencion al cliente, ubicado en Av. Mocopulli 145, Dalcahue, Los Lagos, horario de 9:00 AM hasta las 18:00 PM de lunes a sabado
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </>
    )
}

export default Contact