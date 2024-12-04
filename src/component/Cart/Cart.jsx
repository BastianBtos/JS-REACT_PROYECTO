import {useCart} from "../../store/useCart.jsx";
import {CartItem} from "../CartItem/CartItem.jsx";
import { MdDelete } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
    const { cartItems, totalPrice, reduceFromCart ,clearCart, deleteFromCart, increaseQuantity} = useCart();
    const navigate = useNavigate();
    return (
        <div>
            {cartItems.length === 0 ? (
                <div/>

            ) : (
                <div className="bg-gray-900 text-center py-8 px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-wide uppercase">
                        Carrito
                    </h1>
                    <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300">
                        Aquí se muestran tus diferentes selecciones
                    </p>
                </div>

            )
            }
            <div className="p-4 rounded-lg max-w-7xl mx-auto">
                <div className="space-y-4">
                    {cartItems.length === 0 ? (
                        <div className="place-items-center content-center text-[white] text-[30px] h-[480px]">
                            <h2 className="uppercase">No hay productos en el carrito</h2>
                            <img src="https://cdn-icons-png.flaticon.com/512/17568/17568902.png" alt="..."
                                 className="h-80"/>
                            <button
                                className="hover:scale-110 transition-all duration-500 cursor-pointer text-[white] hover:text-[red]"
                                onClick={() => navigate('/productos')}>Explora Mas
                            </button>

                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <div>
                                <div key={item.id} className="flex justify-between items-center bg-white p-4 rounded-lg">
                                    <CartItem {...item} />
                                    <button onClick={() => reduceFromCart(item.id)}
                                            className=" inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-3 py-1 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800 content-center">

                                        -{" "}
                                    </button>
                                    <button onClick={() => deleteFromCart(item.id)}>
                                        <MdDelete className="text-2xl text-red-500 hover:text-red-700"/>
                                    </button>
                                    <button onClick={() => increaseQuantity(item.id)}
                                            className=" inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-3 py-1 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800 content-center">

                                        +{" "}
                                    </button>

                                </div>
                            </div>
                        ))
                    )}
                </div>
                {cartItems.length === 0 ? (
                    <div/>

                ) : (
                    <div>
                        <h2 className="text-cyan-50 text-2xl font-semibold mb-4">
                            Carrito | Total: ${totalPrice}
                        </h2>
                        <button onClick={clearCart} className="bg-red-500 text-white px-4 py-2 rounded mt-4">
                            Vaciar Carrito
                        </button>
                    </div>
                )
                }

            </div>
        </div>
    )
}