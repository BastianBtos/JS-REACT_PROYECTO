import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/asyncMock.jsx';
import {useCart} from "../../store/useCart.jsx";
import { FaPlane } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";
import Loading from '../Loading/Loading.jsx';

export default function ItemDetail() {

    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product.id, quantity);
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        getProductById(productId).then((data) => {
            setProduct(data);
            setLoading(false);
        });
    }, [productId]);

    const [quantity, setQuantity] = useState(1);

    const decrementQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const incrementQuantity = () => {
        if (quantity < product.stock) setQuantity(quantity + 1);
    };

    if (loading) {
        return <div className='container mx-auto max-w-[1170px]'><Loading /></div>;
    }
    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <section className="py-12 sm:py-16">
            <div className="container w-full mx-auto px-4">
                <div
                    className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
                    <div className="lg:col-span-3 lg:row-end-1">
                        <div className="lg:flex lg:items-start">
                            <div className="lg:order-2 lg:ml-5">
                                <div className="max-w-xl overflow-hidden rounded-lg">
                                    <img className="w-[800px]"
                                         src={product.img} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
                        <h1 className="sm: text-2xl font-bold text-[white] sm:text-3xl uppercase">{product.name}</h1>
                        <div className=" justify-content-center mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                            <div className="flex items-end">
                                <h1 className="text-3xl font-bold text-[white]">${product.price} USD</h1>
                                <span className="text-base text-[white]">/Precio Unidad</span>
                            </div>
                        </div>
                        <div>
                            <div className="mt-4 justify-content-center flex">
                                <h1 className="text-[white] font-bold text-[20px]">Stock:{product.stock}</h1>
                            </div>
                            <div className='justify-content-center flex text-[white] mt-3 mb-3 font-bold items-center'>
                                <button onClick={decrementQuantity}
                                        className='hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-3 py-1 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800 content-center'> -
                                </button>
                                <p className='text-[20px] px-[10px]'>{quantity}</p>
                                <button onClick={incrementQuantity}
                                        className='hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-3 py-1 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800 content-center'> +
                                </button>
                            </div>
                        </div>
                        <div className="justify-content-center mt-10 flex flex-col items-center justify-between space-y-4 border-t py-4 sm:flex-row sm:space-y-0">
                            <div className=" flex items-center">
                                <h1 className="text-3xl font-bold text-[white]">${product.price * quantity} USD</h1>
                                <span className="text-base text-[white]">/Precio Total</span>
                                <button type="button" onClick={handleAddToCart}
                                        className="mx-2 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800 content-center">
                                    Añadir al Carro
                                </button>
                            </div>
                        </div>

                        <ul className="mt-8 space-y-2 ">
                            <li className="flex items-center text-left text-sm font-medium text-[white]">
                                <FaPlane />
                                Envío gratuito al mundo
                            </li>

                            <li className="flex items-center text-left text-sm font-medium text-[white]">
                                <FaCreditCard />
                                Cancela con Cualquier Metodo
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-3 text-[white]">
                        <div className="border-b border-gray-300">
                                <p className="border-b-2 py-4 text-sm font-medium"> Descripción </p>
                        </div>

                        <div className="mt-8 flow-root sm:mt-12">
                            <h1 className="text-3xl font-bold text-justify">Envio a la puerta de tu casa</h1>
                            <p className="mt-4">Cuando realizas una compra en Steam consolas desde el extranjero,
                                iniciamos un proceso cuidadoso para que tu producto llegue a ti de la manera más rápida
                                y segura posible.</p>
                            <h1 className="mt-8 text-3xl font-bold">Desde el Extranjero a tu Hogar</h1>
                            <p className="mt-4 text-justify">{product.despcription}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}