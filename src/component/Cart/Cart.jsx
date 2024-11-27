import { MdDelete } from 'react-icons/md'
import {useNavigate, useParams} from 'react-router-dom';
import useCart from "../../store/useCart.jsx"
import {useEffect, useState} from "react";
import {getProductById} from "../../data/asyncMock.jsx";
import Loading from "../Loading/Loading.jsx"

export default function Cart() {
    const { cart, removeFromCart, clearCart} = useCart();
    const navigate = useNavigate();
    const { increaseQuantity, decreaseQuantity } = useCart();
    console.log(cart);
    const { productId } = useParams();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        getProductById(cart).then(() => {
            setLoading(false);
        });
    }, [productId]);

    if (loading) {
        return <div className='container mx-auto max-w-[1170px]'><Loading /></div>;
    }



    if (cart.length === 0) {
        return (
            <div className="place-items-center text-[white] text-[30px]">
                <h2>No hay productos en el carrito</h2>
                <img src="https://cdn-icons-png.flaticon.com/512/17568/17568902.png" alt="..." className="h-40"/>
                <button onClick={() => navigate('/productos')}>Explora Mas</button>

            </div>

        );

    }


    return (
        <div className="text-[white] text-[15px]">
            <div className="bg-gray-900 text-center py-8">
                <h1 className=" md:text-6xl font-bold text-white tracking-wide uppercase">
                    Carrito
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-300">
                    Aqui se muestran tus diferentes selecciones
                </p>
            </div>
            <div>
                {cart.map((item) => (
                    <div key={item.id}
                         className="my-3 border-b border-black grid grid-cols-6 p-3 items-center">


                        <div className="col-span-2">
                            <div className="flex items-center">
                                <img src={item.img} alt={item.name} className="h-20"/>
                                <h3 className=" font-bold m-[6px] uppercase">{item.name}</h3>
                            </div>
                        </div>


                        <div className="col-span-1">
                        <p className=" font-bold pl-8">${totalCost}/USD</p>
                        </div>


                            <div className="col-span-2 pl-5">
                                <div className="flex items-center justify-center gap-1">
                                    <button onClick={() => decreaseQuantity(item.id)}
                                            className=" inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-3 py-1 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800 content-center">

                                        -{" "}
                                    </button>
                                    <p>{item.quantity}</p>
                                    <button onClick={() => increaseQuantity(item.id)}
                                            className=" inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-3 py-1 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800 content-center">
                                        {" "}
                                        +{" "}
                                    </button>
                                </div>

                            </div>


                        <div>
                            <button onClick={() => removeFromCart(item.id)}>
                                <MdDelete className="text-2xl text-red-500 hover:text-red-700" />
                            </button>
                        </div>


                    </div>
                ))}
            </div>

            <div className="flex justify-center">
                <button
                    className=" mx-2 bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all"
                    onClick={clearCart}>
                    Vaciar carrito
                </button>
                <button
                    className=" mx-2 bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all">
                    Finalizar compra
                </button>
            </div>
        </div>
    );
}