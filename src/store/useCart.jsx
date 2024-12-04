import { create } from 'zustand';
import { products } from "../data/asyncMock.jsx";

export const useCart = create((set, get) => ({
    cartItems: [],
    products: products,
    totalPrice: 0,

    addToCart: (productId, quantity) => {
        set(() => {
            const product = get().products.find((item) => item.id === productId);
            if (product) {
                const cartItemFound = get().cartItems.find((cartItem) => cartItem.id === productId);
                if (cartItemFound) {
                    const newQuantity = cartItemFound.quantity + quantity;
                    if (newQuantity <= product.stock) {
                        return {
                            cartItems: get().cartItems.map((cartItem) =>
                                cartItem.id === productId
                                    ? { ...cartItem, quantity: newQuantity }
                                    : cartItem
                            ),
                            totalPrice: get().totalPrice + product.price * quantity,
                        };
                    } else {
                        alert("stock maximo alcanzado");
                        return get();
                    }
                } else {
                    if (quantity <= product.stock) {
                        return {
                            cartItems: [...get().cartItems, { ...product, quantity }],
                            totalPrice: get().totalPrice + product.price * quantity,
                        };
                    } else {
                        alert("stock maximo alcanzado");
                        return get();
                    }
                }
            }
        });
    },

    deleteFromCart: (productId,) =>
        set((state) => ({
            cartItems: state.cartItems.filter(
                (item) => item.id !== productId
            ),
        })),

    reduceFromCart: (productId) => {
        set((state) => {
            const itemIndex = state.cartItems.findIndex((cartItem) => cartItem.id === productId);
            if (itemIndex !== -1) {
                const updatedCartItems = [...state.cartItems];
                const itemToRemove = updatedCartItems[itemIndex];

                if (itemToRemove.quantity > 1) {
                    updatedCartItems[itemIndex] = {
                        ...itemToRemove,
                        quantity: itemToRemove.quantity - 1,
                    };
                    return {
                        cartItems: updatedCartItems,
                        totalPrice: state.totalPrice - itemToRemove.price,
                    };
                } else {
                    updatedCartItems.splice(itemIndex, 0);
                    return {
                        cartItems: updatedCartItems,
                    };
                }
            }
            return state;
        });
    },
    increaseQuantity: (id) =>
        set((state) => {
            const updatedCartItems = state.cartItems.map((item) => {
                if (item.id === id && item.quantity < item.stock) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });

            const updatedTotalPrice = updatedCartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
            );

            return {
                cartItems: updatedCartItems,
                totalPrice: updatedTotalPrice,
            };
        }),

    clearCart: () => {
        set({
            cartItems: [],
            totalPrice: 0,
        });
    },
}));