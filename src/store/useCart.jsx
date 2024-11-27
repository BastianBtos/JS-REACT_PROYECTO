import { create } from 'zustand';

const useCart = create((set) => ({
    cart: [],
    increaseQuantity: (id) =>

        set((state) => ({
            cart: state.cart.map((item)  =>
                item.id === id  ? { ...item, quantity: item.quantity + 1 } : item

            ),
        })),

    decreaseQuantity: (id) =>
        set((state) => ({
            cart: state.cart
                .map((item) =>
                    item.id === id && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0),
        })),



    addToCart: (product, quantity = 1) =>
        set((state) => {
            const existingProduct = state.cart.find(
                (item) => item.id === product.id
            );
            if (existingProduct) {
                return {
                    cart: state.cart.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + quantity }
                            : item
                    ),
                };
            } else {
                return {
                    cart: [
                        ...state.cart,
                        { ...product, quantity,},
                    ],
                };
            }
        }),
    removeFromCart: (productId,) =>
        set((state) => ({
            cart: state.cart.filter(
                (item) => item.id !== productId
            ),
        })),
    clearCart: () => set({ cart: [] }),
}));


export default useCart;