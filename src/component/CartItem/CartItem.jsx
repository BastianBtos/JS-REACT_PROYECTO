export const CartItem = ({ id, img, price, quantity, name }) => {
    return (
        <div className="my-3 border-b border-black grid grid-cols-6 p-3 items-center gap-4 sm:grid-cols-8 md:grid-cols-12 lg:grid-cols-12">
            <div className="col-span-2 flex items-center gap-2 sm:col-span-3 lg:col-span-4">
                <img src={img} alt={id} className="h-16 w-16 object-cover sm:h-20 sm:w-20" />
                <h3 className="font-bold text-sm sm:text-base lg:text-lg m-[6px] uppercase truncate">
                    {name}
                </h3>
            </div>
            <div className="col-span-2 sm:col-span-2 lg:col-span-3 flex items-center justify-center">
                <p className="font-bold text-sm sm:text-base lg:text-lg">${price}/USD</p>
            </div>
            <div className="col-span-2 sm:col-span-2 lg:col-span-3 flex items-center justify-center gap-2">
                <p className="font-medium text-sm sm:text-base lg:text-lg">{quantity}</p>
            </div>
        </div>
    );
};
