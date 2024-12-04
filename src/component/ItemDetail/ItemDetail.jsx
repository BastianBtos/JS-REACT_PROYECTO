import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/asyncMock.jsx';
import {useCart} from "../../store/useCart.jsx";
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
                        <div
                            className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                            <div className="flex items-end">
                                <h1 className="text-3xl font-bold text-[white]">${product.price} USD</h1>
                                <span className="text-base text-[white]">/Precio Unidad</span>
                            </div>
                        </div>
                        <div>
                            <div className='flex text-[white] mt-3 mb-3 font-bold items-center'>
                                <h1 className="mr-3 text-[20px]">Stock:{product.stock}</h1>
                                <button onClick={decrementQuantity}
                                        className='inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-3 py-1 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800 content-center'> -
                                </button>
                                <p className='text-[20px] px-[10px]'>{quantity}</p>
                                <button onClick={incrementQuantity}
                                        className='inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-3 py-1 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800 content-center'> +
                                </button>
                            </div>
                        </div>
                        <div
                            className="mt-10 flex flex-col items-center justify-between space-y-4 border-t py-4 sm:flex-row sm:space-y-0">
                            <div className="flex items-center">
                                <h1 className="text-3xl font-bold text-[white]">${product.price * quantity} USD</h1>
                                <span className="text-base text-[white]">/Precio Total</span>
                            </div>
                        </div>
                        <button type="button" onClick={handleAddToCart}
                                className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800 content-center">
                            Añadir al Carro
                        </button>


                        <ul className="mt-8 space-y-2 ">
                            <li className="flex items-center text-left text-sm font-medium text-[white]">
                                Envío gratuito al mundo
                            </li>

                            <li className="flex items-center text-left text-sm font-medium text-[white]">
                                Cancela con Cualquier Metodo
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-3 text-[white]">
                        <div className="border-b border-gray-300">
                            <nav className="flex gap-4">
                                <a href="#" title=""
                                   className="border-b-2 py-4 text-sm font-medium"> Descripción </a>
                            </nav>
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